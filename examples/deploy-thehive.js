const thehive4nodejs = require('thehive4nodejs');
const myThehive = new thehive4nodejs()

/**
 * This script will deploy (or update) a thehive instance
 * Techno: docker
 * 
 * All custom config are in `./confs/docker.thehive.base.json`
 * Update as you need and pass your update in argument of the function
 * for example: 
 * 
 * await myThehive.custom.deploy.docker_deployNewVersion({
 *      port: "1234"
 * })
 * 
 * will inject a new value for the port
 */

// Start the deploy process
async function deploy() {
    await myThehive.custom.deploy.docker_deployNewVersion()
}

deploy()