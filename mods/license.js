const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the license API
 */
const License = class {
    /**
     * Get Current License
     * @returns {Promise} The response of the request
     */
    async getCurrentLicense() {
        return await fetchInstance.get(`/api/v1/license/current`)
    }

    /**
     * Get License
     * @param {string} id The id of the license
     * @returns {Promise} The response of the request
     */
    async getLicense(
        id
    ) {
        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with "~"')
        }

        return await fetchInstance.get(`/api/v1/license/${id}`)
    }

    /**
     * Get all licenses
     * @returns {Promise} The response of the request
     */
    async getAllLicenses() {
        return await fetchInstance.get(`/api/v1/license`)
    }

    /**
     * Add license & activate
     * @param {string} license The license to add
     * @returns {Promise} The response of the request
     */
    async addLicense(
        license
    ) {
        // check license between 1 and 128 characters
        if(!checks.checkSize(1, 512, license)) {
            throw new Error('License must be between 1 and 512 characters')
        }

        return await fetchInstance.post(`/api/v1/license`, {
            license: license
        })
    }

    /**
     * Activate license
     * @param {string} id The id of the license
     * @returns {Promise} The response of the request
     */
    async activateLicense(
        id
    ) {
        // check id starts with '~'
        if(!checks.checkStartsWith('~', id)) {
            throw new Error('Id must start with "~"')
        }

        return await fetchInstance.post(`/api/v1/license/${id}/activate`)
    }

    /**
     * Get challenge
     * @returns {Promise} The response of the request
     */
    async getChallenge() {
        return await fetchInstance.get(`/api/v1/license/challenge`)
    }
        
}

module.exports.license = new License()