const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the function API
 */
const Function = class {
    /**
     * Create function
     * @param {string} name The name of the function
     * @param {string} mode The mode of the function
     * @param {string} definition The definition of the function
     * @param {string} description The description of the function
     * @param {string} config The config of the function
     */
    async createFunction(
        name,
        mode,
        definition,
        description,
        config
    ) {
        // check name between 1 and 128 characters
        if(!checks.checkSize(1, 128, name)) {
            throw new Error('Name must be between 1 and 128 characters')
        }

        // check mod is valid
        if(!["Enabled", "Disabled", "DryRun"].includes(mode)) {
            throw new Error('Mode must be one of: Enabled, Disabled, DryRun')
        }

        // check definition between 1 and 1048576 characters
        if(!checks.checkSize(1, 1048576, definition)) {
            throw new Error('Definition must be between 1 and 1048576 characters')
        }

        // check description between 0 and 1048576 characters
        if(!checks.checkSize(0, 1048576, description)) {
            throw new Error('Description must be between 0 and 1048576 characters')
        }

        return await fetchInstance.post('/api/v1/function', {
            name: name,
            mode: mode,
            definition: definition,
            description: description,
            config: config
        })
    }

    /**
     * Invoke function
     * @param {string} id The id of the function
     * @returns {Promise} The response of the request
     */
    async invokeFunction(
        id
    ) {
        // check id starts with '~'
        if(!checks.checkStartsWith('~', id)) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.post(`/api/v1/function/${id}`)
    }

    /**
     * Get function
     * @param {string} id The id of the function
     * @returns {Promise} The response of the request
     */
    async getFunction(
        id
    ) {
        // check id starts with '~'
        if(!checks.checkStartsWith('~', id)) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.get(`/api/v1/function/${id}`)
    }

    /**
     * Delete function
     * @param {string} id The id of the function
     * @returns {Promise} The response of the request
     */
    async deleteFunction(
        id
    ) {
        // check id starts with '~'
        if(!checks.checkStartsWith('~', id)) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/function/${id}`)
    }

    /**
     * Update function
     * @param {string} id The id of the function
     * @param {string} mode The mode of the function
     * @param {string} definition The definition of the function
     * @param {string} description The description of the function
     * @param {string} config The config of the function
     * @returns {Promise} The response of the request
     */
    async updateFunction(
        id,
        mode,
        definition,
        description,
        config
    ) {
        // check id starts with '~'
        if(!checks.checkStartsWith('~', id)) {
            throw new Error('Id must start with ~')
        }

        // check mod is valid
        if(!["Enabled", "Disabled", "DryRun"].includes(mode)) {
            throw new Error('Mode must be one of: Enabled, Disabled, DryRun')
        }

        // check definition between 1 and 1048576 characters
        if(!checks.checkSize(1, 1048576, definition)) {
            throw new Error('Definition must be between 1 and 1048576 characters')
        }

        // check description between 0 and 1048576 characters
        if(!checks.checkSize(0, 1048576, description)) {
            throw new Error('Description must be between 0 and 1048576 characters')
        }

        return await fetchInstance.patch(`/api/v1/function/${id}`, {
            mode: mode,
            definition: definition,
            description: description,
            config: config
        })
    }

    /**
     * Test function
     * @param {string} name The name of the function
     * @param {string} definition The definition of the function
     * @param {string} config The config of the function
     * @param {string} input The input of the function
     * @returns {Promise} The response of the request
     */
    async testFunction(
        name,
        definition,
        config,
        input
    ) {
        // check name between 1 and 128 characters
        if(!checks.checkSize(1, 128, name)) {
            throw new Error('Name must be between 1 and 128 characters')
        }

        // check definition between 1 and 1048576 characters
        if(!checks.checkSize(1, 1048576, definition)) {
            throw new Error('Definition must be between 1 and 1048576 characters')
        }

        return await fetchInstance.post('/api/v1/function/test', {
            name: name,
            definition: definition,
            config: config,
            input: input
        })
    }
    
}

module.exports.function = new Function()