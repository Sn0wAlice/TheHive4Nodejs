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

    async get(endpoint) {
        try {
            const req = await f(`${this.thehivehostname}${endpoint}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${this.thehiveapikey}`,
                }
            })
            return await req.json()
        } catch (error) {
            return null
        }
    }
    async post(endpoint, body) {
        try {
            const req = await f(`${this.thehivehostname}${endpoint}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this.thehiveapikey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            return await req.json()
        } catch (error) {
            return null       
        }
    }

    async delete(endpoint) {
        try {
            const req = await f(`${this.thehivehostname}${endpoint}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${this.thehiveapikey}`,
                }
            })

            // check if status is 200
            if(req.status == 200) {
                return {delete: true}
            }

            return await req.json()
        } catch (error) {
            return null
        }
    }

    async patch(endpoint, body) {
        try {
            const req = await f(`${this.thehivehostname}${endpoint}`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${this.thehiveapikey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            return await req.json()
        } catch (error) {
            return null
        }
    }

    async put(endpoint, body) {
        try {
            const req = await f(`${this.thehivehostname}${endpoint}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${this.thehiveapikey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
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