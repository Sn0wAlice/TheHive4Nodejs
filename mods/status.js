const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Status API
 */
const Status = class {
    /**
     * Get platform public status
     * @returns {Promise} The response of the request
     */
    async getPlatformPublicStatus() {
        return await fetchInstance.get('/api/v1/status/public')
    }

    /**
     * Get platform status
     * @returns {Promise} The response of the request
     */
    async getPlatformStatus() {
        return await fetchInstance.get('/api/v1/status')
    }
}

module.exports.status = new Status()