const readDir = require('./utils/readDir.js')
const fetch = require('./utils/fetch.js')
const fetchInstance = fetch.getInstance()

let customScripts = class {

}

let thehive4nodejs = class {
    thehivehostname = ""
    thehiveport = ""
    thehiveapikey = ""

    constructor(thehivehostname = "http://127.0.0.1", thehiveport = "9000", thehiveapikey = "", autosigned = false) {
        this.thehivehostname = thehivehostname
        this.thehiveport = thehiveport
        this.thehiveapikey = thehiveapikey

        if(autosigned) {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
        }

        fetchInstance.setConfig(thehivehostname, thehiveport, thehiveapikey)
    }

    getConfig() {
        return {
            thehivehostname: this.thehivehostname,
            thehiveport: this.thehiveport,
            thehiveapikey: this.thehiveapikey.length > 0 ? "yes" : "no"
        }
    }

    
}

// Load All Modules
const modules = readDir(`${__dirname}/mods`)
for(let module of modules) {
    const tmp = require(`${__dirname}/mods/${module}`)
    // for each key in the object, inject it into the class prototype
    for(let key in tmp) {
        thehive4nodejs.prototype[key] = tmp[key]
    }
}

// Load Custom Scripts
const scripts = readDir(`${__dirname}/scripts`)
for(let script of scripts) {
    const tmp = require(`${__dirname}/scripts/${script}`)
    // for each key in the object, inject it into the class prototype
    for(let key in tmp) {
        customScripts.prototype[key] = tmp[key]
    }
}

// create an instance of customScripts in thehive4nodejs (how yeah)
thehive4nodejs.prototype.custom = new customScripts()

module.exports = thehive4nodejs