const fetch = require('node-fetch')
const fetch_custom = require('../utils/fetch.js')
const fetchInstance = fetch_custom.getInstance()

const { exec } = require('child_process')
const fs = require('fs')


const HOME = process.env.HOME || process.env.USERPROFILE || process.env.HOMEPATH || process.env.HOMEDIR || './'
// Create the dir: $HOME/.thehive4nodejs
const THEHIVE4NODEJS_DIR = `${HOME}/.thehive4nodejs`
if (!fs.existsSync(THEHIVE4NODEJS_DIR)) {
    fs.mkdirSync(THEHIVE4NODEJS_DIR)
}


/**
 * This class is used to say hello
 */
const deploy = class {
    
    // The public part
    async docker_deployNewVersion(config = {}) {
        const lastVersion = await this.getLastDockerImageVersion()
        console.log(`[INFO] The version of the docker image is ${lastVersion}`)

        // 1. check docker and docker-compose are installed
        await this.checkDockerIsInstalled()

        // 2. check if old version is installed, and if yes, stop it
        await this.checkOldVersionIsInstalled()

        // 3. update the file
        config.version = lastVersion
        await this.updateConfigFile(config)

        // 4. deploy the new version
        await this.deployNewVersion()

        // 5. check the new deployment is ok
        await this.sleep(10000)
        await this.checkNewVersionIsInstalled()

        // 6. prune all old docker images
        //await this.pruneOldImages()

        console.log(`[INFO] The new version is deployed ^^`)
    }





    // the private one
    async getLastDockerImageVersion() {
        try {
            const req = await fetch("https://hub.docker.com/v2/namespaces/strangebee/repositories/thehive/tags")
            let res = await req.json()
            // filter the results by the last month database
            res = res.results.filter((x) => (new Date(x.last_updated)).getTime() > (Date.now() - (1000 * 60 * 60 * 24 * 30)))
            // sort the results by the last version
            res.sort((a, b) => (new Date(b.last_updated)).getTime() - (new Date(a.last_updated)).getTime())

            const consideredLastVersion = res[0]

            return consideredLastVersion.name
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateConfigFile(config) {
        let baseFile = fs.readFileSync(`./confs/docker.thehive.yml`, 'utf8')
        const simpleConfig = JSON.parse(fs.readFileSync(`./confs/docker.thehive.base.json`, 'utf8'))
        // for each key in the config, replace the value in the base file
        for (const key in config) {
            if (Object.hasOwnProperty.call(config, key)) {
                const value = config[key];
                simpleConfig[key] = value
            }
        }
        // update the config file
        baseFile = baseFile.replace(/__THEHIVE_VERSION__/g, simpleConfig.version)
        .replace(/__CORTEX_API_KEY__/g, simpleConfig.cortext_api_key)

        console.log(`[INFO] The config file is updated [${THEHIVE4NODEJS_DIR}/docker.thehive.yml]`)
        fs.writeFileSync(`${THEHIVE4NODEJS_DIR}/docker.thehive.yml`, baseFile)
    }

    async deployNewVersion() {
        // execute docker-compose command on the config file

        const cmd = `docker-compose -f ${THEHIVE4NODEJS_DIR}/docker.thehive.yml up -d`
        console.log(`[INFO] Executing the command: "${cmd}", please wait... it can take a while...`)

        await new Promise((resolve, reject) => {
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.error(`[ERROR] ${error}`)
                    reject(error)
                }
                resolve(stdout)
            })
        })

    }

    async checkDockerIsInstalled() {
        console.log(`[INFO] Checking if docker is installed...`)
        await new Promise((resolve, reject) => {
            exec(`docker -v`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`[ERROR] Docker does not seem to be installed`)
                    console.log(`[ERROR] Please install docker and docker-compose before running this script`)
                    console.error(`[ERROR] ${error}`)
                    throw new Error(error)
                }
                resolve(stdout)
            })
        })

        console.log(`[INFO] Docker is installed !`)
        console.log(`[INFO] Checking if docker-compose is installed...`)
        await new Promise((resolve, reject) => {
            exec(`docker-compose -v`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`[ERROR] Docker-compose does not seem to be installed`)
                    console.log(`[ERROR] Please install docker and docker-compose before running this script`)
                    console.error(`[ERROR] ${error}`)
                    throw new Error(error)
                }
                resolve(stdout)
            })
        })

        console.log(`[INFO] Docker-compose is installed !`)
    }

    async checkOldVersionIsInstalled() {
        const tags = [
            "thehiveproject/cortex",
            "quay.io/minio/minio",
            "strangebee/thehive",
            "cassandra",
            "docker.elastic.co/elasticsearch/elasticsearch"
        ]

        let dockerPs = await new Promise((resolve, reject) => {
            exec(`docker ps`, (error, stdout, stderr) => {
                resolve(stdout)
            })
        })

        let arrayOfDockerPs = dockerPs.split("\n")

        // down all this containers if they are running
        for(const tag of tags) {
            for(const line of arrayOfDockerPs) {
                if(line.includes(tag)) {
                    let containerID = line.split(" ")[0]
                    console.log(`[INFO] Stopping the container ${tag} [${containerID}]`)
                    await new Promise((resolve, reject) => {
                        exec(`docker stop ${containerID}`, (error, stdout, stderr) => {
                            resolve(stdout)
                        })
                    })
                }
            }
        }
    }

    async pruneOldImages() {
        console.log(`[INFO] Pruning old docker images...`)
        await new Promise((resolve, reject) => {
            exec(`docker image prune -a`, (error, stdout, stderr) => {
                resolve(stdout)
            })
        })
    }

    async checkNewVersionIsInstalled() {
        console.log(`[INFO] Checking if the new version is deployed...`)
        // timeout of 50 minutes
        let timeout = 1000 * 60 * 15
        
        while (timeout > 0) {
            const start = Date.now()
            
            try {
                const req = await fetch("http://127.0.0.1:9000/api/v1/status/public")
            
                // check of the status is 200
                if (req.status === 200) {
                    const b = await req.json()
                    console.log(`[INFO] Identified version: ${b.version}`)
                    return
                }

            } catch (err){
                console.log(`[INFO] The new version is not deployed yet...`)
                // wait 5 seconds
                await this.sleep(20000)
            }

            const end = Date.now()
            // remove the timeout
            timeout -= (end - start)
        }

        throw new Error(`[ERROR] The new version is not deployed after 5 minutes ! please check the logs`)
    }


    async sleep(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, ms)
        })
    }

}

module.exports.deploy = new deploy()