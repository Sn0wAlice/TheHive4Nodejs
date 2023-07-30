const fetch = require('./utils/fetch.js')
const readDir = require('./utils/readDir.js')
const fetchInstance = fetch.getInstance()

let thehive4nodejs = class {
    thehivehostname = ""
    thehiveport = ""
    thehiveapikey = ""

    constructor(thehivehostname, thehiveport, thehiveapikey) {
        this.thehivehostname = thehivehostname
        this.thehiveport = thehiveport
        this.thehiveapikey = thehiveapikey

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
const modules = readDir('./mods')
for(let module of modules) {
    const tmp = require('./mods/' + module)
    // for each key in the object, inject it into the class prototype
    for(let key in tmp) {
        thehive4nodejs.prototype[key] = tmp[key]
    }
}


module.exports = thehive4nodejs