const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Describe API
 */
const Describe = class {
    /**
     * Decribe a model
     * @param {string} model The name of the model to describe
     * @returns {Promise} The response of the request
     */
    async describe(
        model
    ) {
        // check the model is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, model)) {
            throw new Error('Model must be between 1 and 512 characters')
        }

        return await fetchInstance.get(`/api/v1/describe/${model}`)
    }

    /**
     * Decribe all models
     * @returns {Promise} The response of the request
     */
    async describeAll() {
        return await fetchInstance.get(`/api/v1/describe/_all`)
    }
}

module.exports.describe = new Describe()