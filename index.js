const readDir = require('./utils/readDir.js')
const fetch = require('./utils/fetch.js')
const fetchInstance = fetch.getInstance()

let customScripts = class {

}

let thehive4nodejs = class {
    thehivehostname = ""
    thehiveport = ""
    thehiveapikey = ""

    constructor(thehivehostname = "http://127.0.0.1", thehiveport = "9000", thehiveapikey = "") {
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

// Load Custom Scripts
const scripts = readDir('./scripts')
for(let script of scripts) {
    const tmp = require('./scripts/' + script)
    // for each key in the object, inject it into the class prototype
    for(let key in tmp) {
        customScripts.prototype[key] = tmp[key]
    }
}

// create an instance of customScripts in thehive4nodejs (how yeah)
thehive4nodejs.prototype.custom = new customScripts()

module.exports = thehive4nodejs