const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Audit API
 */
const Audit = class {
    /**
     * Create a stream of audit events
     * @returns {Promise} The response of the request
     */
    async createStream() {
        return await fetchInstance.post('/api/v1/stream')
    }

    /**
     * Get a stream of audit events
     * @param {string} id The id of the stream
     */
    async getStream(id) {
        // check the id is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, id)) {
            throw new Error('Id must be between 1 and 512 characters')
        }

        return await fetchInstance.get(`/api/v1/stream/${id}`)
    }

    /**
     * Get flow of audit events
     * @param {string} id The id of the stream
     * @returns {Promise} The response of the request
     */
    async getFlow(
        id = null
    ) {
        // check the id is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, id)) {
            throw new Error('Id must be between 1 and 512 characters')
        }

        if(!id) {
            return await fetchInstance.get(`/api/v1/flow`)
        }

        return await fetchInstance.get(`/api/v1/flow?rootId=${id}`)
    }
}

module.exports.audit = new Audit()