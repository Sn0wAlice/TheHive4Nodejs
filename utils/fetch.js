const f = require('node-fetch');

// export the fetch class
class fetchPrivate {

    thehivehostname = ""
    thehiveapikey = ""

    constructor() {
        console.log(`Connector is initialized`)
    }

    setConfig(thehivehostname, thehiveport, thehiveapikey) {
        this.thehivehostname = thehivehostname + (thehiveport.length > 0 ? ":" + thehiveport : "")
        this.thehiveapikey = thehiveapikey
    }

    getHostname() {
        return this.thehivehostname
    }

    async query(method, endpoint, body) {
        try {
            const req = await f(`${this.thehivehostname}${endpoint}`, {
                method: method,
                headers: {
                    "Authorization": `Bearer ${this.thehiveapikey}`,
                },
                body: body
            })
            return await req.json()
        } catch (error) {
            return null
        }
    }
}


class fetch {
    constructor() {
        throw new Error('Use fetch.getInstance()');
    }    
    
    static getInstance() {
        if (!fetch.instance) {
            fetch.instance = new fetchPrivate();
        }
        return fetch.instance;
    }
}

module.exports = fetch;