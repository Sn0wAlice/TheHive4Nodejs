const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the ObservableType API
 */
const ObservableType = class {
    /**
     * Get observable type by id
     * @param {string} id The id of the observable type
     * @returns {Promise} The response of the request
     */
    async getObservableTypeById(
        id
    ) {
        // check id is a string starting with "~"
        if(!id.startsWith('~')) {
            throw new Error('id must be a string starting with "~"')
        }

        return await fetchInstance.get(`/api/v1/observable/type/${id}`)
    }

    /**
     * Delete observable type by id
     * @param {string} id The id of the observable type
     * @returns {Promise} The response of the request
     */
    async deleteObservableTypeById(
        id
    ) {
        // check id is a string starting with "~"
        if(!id.startsWith('~')) {
            throw new Error('id must be a string starting with "~"')
        }

        return await fetchInstance.delete(`/api/v1/observable/type/${id}`)
    }

    /**
     * Create observable type
     * @param {string} name The name of the observable type
     * @param {string} isAttachment The isAttachment of the observable type
     * @returns {Promise} The response of the request
     */
    async createObservableType(
        name,
        isAttachment
    ) {
        // checks name is a string of max 512 characters
        if(!checks.checkSize(1, 64, name)) {
            throw new Error('name must be a string of max 64 characters')
        }

        // check isAttachment is a boolean
        if(!typeof isAttachment === 'boolean') {
            throw new Error('isAttachment must be a boolean')
        }

        return await fetchInstance.post(`/api/v1/observable/type`, {
            name: name,
            isAttachment: isAttachment
        })
    }
}

module.exports.observabletype = new ObservableType()