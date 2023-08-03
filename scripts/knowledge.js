const fetch = require('node-fetch')
const fetch_custom = require('../utils/fetch.js')
const fetchInstance = fetch_custom.getInstance()

const page = (require('../mods/page.js')).page

const fs = require('fs')

/**
 * This class is used to manage the knowledge database
 */
const knowledge = class {
    async getCurentKnowledgeDatabase() {
        return  await fetchInstance.post('/api/v1/query?name=get-all-org-pages', 
        {
            "query":[
                {"_name":"listOrganisationPage"},{"_name":"sort","_fields":[{"_createdAt":"asc"}]}
            ]
        })
    }

    async backupKnowledgeDatabase(dir = './backup') {
        // Step 1: get all the pages
        const pages = await this.getCurentKnowledgeDatabase()

        if(!fs.existsSync(`${dir}`)) {
            fs.mkdirSync(`${dir}`)
        }

        for(let i = 0; i < pages.length; i++) {
            // check if $dir/$category exists
            if(!fs.existsSync(`${dir}/${pages[i].category}`)) {
                fs.mkdirSync(`${dir}/${pages[i].category}`)
            }

            // Step2: write the content in the file in the directory
            fs.writeFileSync(`${dir}/${pages[i].category}/${pages[i].title}.md`, pages[i].content)
        }
    }

    async deleteAllKnowledgeDatabase() {
        const pages = await this.getCurentKnowledgeDatabase()

        for(let i = 0; i < pages.length; i++) {
            await page.deletePage(pages[i]._id)
        }
    }

    async restoreKnowledgeDatabase(dir = './backup') {
        const category = exploreDirSync(dir)
        for(let i = 0; i < category.length; i++) {
            let pages = exploreFilesSync(category[i])
            for(let j = 0; j < pages.length; j++) {
                let content = fs.readFileSync(pages[j], 'utf8')
                await page.createPage(pages[j].split('/')[pages[j].split('/').length - 1].split('.')[0], content, null, pages[j].split('/')[pages[j].split('/').length - 2])
            }
        }
    }

    async injectKnowledgeDatabase(dir = './backup') {
        // Step 1: delete all the pages
        await this.deleteAllKnowledgeDatabase()

        // Step 2: restore the pages
        await this.restoreKnowledgeDatabase(dir)
    }
}


function exploreDirSync(path) {
    let files = fs.readdirSync(path)
    let result = []
    for(let i = 0; i < files.length; i++) {
        if(fs.lstatSync(`${path}/${files[i]}`).isDirectory()) {
            result.push(`${path}/${files[i]}`)
        }
    }
    return result
}

function exploreFilesSync(path) {
    let files = fs.readdirSync(path)
    let result = []
    for(let i = 0; i < files.length; i++) {
        if(!fs.lstatSync(`${path}/${files[i]}`).isDirectory()) {
            result.push(`${path}/${files[i]}`)
        }
    }
    return result
}

module.exports.knowledge = new knowledge()