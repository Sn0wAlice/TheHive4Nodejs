const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Att&ck API
 */
const Attack = class {
    /**
     * Create catalog of TTP
     * @param {string} name The name of the catalog
     * @param {string} description The description of the catalog
     * @param {string} variant The variant of the catalog
     * @returns {Promise} The response of the request
     */
    async createCatalog(
        name,
        description = null,
        variant = null
    ) {
        // check name between 1 and 128 characters
        if(!checks.checkSize(1, 128, name)) {
            throw new Error('Name must be between 1 and 128 characters')
        }

        // check description between 1 and 1048576 characters
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('Description must be between 1 and 1048576 characters')
        }

        // check variant between 1 and 128 characters
        if(variant && !checks.checkSize(1, 128, variant)) {
            throw new Error('Variant must be between 1 and 128 characters')
        }

        return await fetchInstance.post(`/api/v1/catalog`, {
            name,
            description,
            variant
        })
    }

    /**
     * Delete catalog of TTP
     * @param {string} id The id of the catalog
     * @returns {Promise} The response of the request
     */
    async deleteCatalog(
        id
    ) {
        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/catalog/${id}`)
    }

    /**
     * Update catalog of TTP
     * @param {string} id The id of the catalog
     * @param {string} name The name of the catalog
     * @param {string} description The description of the catalog
     * @param {string} variant The variant of the catalog
     */
    async updateCatalog(
        id,
        name = null,
        description = null,
        variant = null
    ) {
        // check if the id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        // check name between 1 and 128 characters
        if(name && !checks.checkSize(1, 128, name)) {
            throw new Error('Name must be between 1 and 128 characters')
        }

        // check description between 1 and 1048576 characters
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('Description must be between 1 and 1048576 characters')
        }

        // check variant between 1 and 128 characters
        if(variant && !checks.checkSize(1, 128, variant)) {
            throw new Error('Variant must be between 1 and 128 characters')
        }

        return await fetchInstance.patch(`/api/v1/catalog/${id}`, {
            name,
            description,
            variant
        })
    }

    /**
     * Import MITRE Att&ck file
     * @param {string} url The url of the file
     * @param {string} catalogid The id of the catalog
     * @param {string} variant The variant of the catalog
     * @returns {Promise} The response of the request
     */
    async importFile(
        url,
        catalogid,
        variant = null
    ) {
        // check url is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, url)) {
            throw new Error('Url must be between 1 and 512 characters')
        }

        // check catalogid starts with '~'
        if(!catalogid.startsWith('~')) {
            throw new Error('Catalog id must start with ~')
        }

        // check variant between 1 and 128 characters
        if(variant && !checks.checkSize(1, 128, variant)) {
            throw new Error('Variant must be between 1 and 128 characters')
        }

        return await fetchInstance.post(`/api/v1/pattern/import/attack`, {
            url,
            catalogid,
            variant
        })

    }


    /**
     * Get pattern
     * @param {string} id The id of the pattern
     * @returns {Promise} The response of the request
     */
    async getPattern(
        id
    ) {
        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.get(`/api/v1/pattern/${id}`)
    }

    /**
     * Delete pattern
     * @param {string} id The id of the pattern
     * @returns {Promise} The response of the request
     */
    async deletePattern(
        id
    ) {
        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/pattern/${id}`)
    }

    /**
     * Get Case pattern
     * @param {string} caseid The id of the case
     * @returns {Promise} The response of the request
     */
    async getCasePattern(
        caseid
    ) {
        // check caseid starts with '~'
        if(!caseid.startsWith('~')) {
            throw new Error('Case id must start with ~')
        }

        return await fetchInstance.get(`/api/v1/pattern/case/${caseid}`)
    }

}

module.exports.attack = new Attack()