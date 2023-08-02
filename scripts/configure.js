const fetch = require('node-fetch')
const fetch_custom = require('../utils/fetch.js')
const fetchInstance = fetch_custom.getInstance()

const login = (require('../mods/login.js')).login

const fs = require('fs')


/**
 * This class is used to say hello
 */
const configure = class {

    cookies = ""

    async setUpDefaultConf() {
        const defaultLogin = "admin@thehive.local"
        const defaultPassword = "secret"

        const l = await this.login(defaultLogin, defaultPassword)
        this.cookies = l.headers.get('set-cookie')

        await this.createOrg("test", "test")

    }

    async login(username, password) {
        // use the login API from thehive4nodejs
        return await login.login(username, password)
    }

    /**
     * taskRule & observableRule> -> manual, autoShare
     * default: manual
     */
    async createOrg(name, description, taskRule="manual", observableRule="manual") {

        if(this.cookies.length == 0) {
            throw new Error("You must login first")
        }

        if(["manual", "autoShare"].indexOf(taskRule) == -1) {
            throw new Error("taskRule must be either manual or autoShare")
        }

        if(["manual", "autoShare"].indexOf(observableRule) == -1) {
            throw new Error("observableRule must be either manual or autoShare")
        }

        let body = {
            "name": name,
            "description": description,
            "taskRule": taskRule,
            "observableRule": observableRule
        }

        const hostname = fetchInstance.getHostname()
        const req = await fetch(`${hostname}/api/v1/organisation`, {
            method: "POST",
            headers: {
                "Cookie": this.cookies,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        console.log(req)
        console.log(await req.json())
    }
}
    

module.exports.configure = new configure()