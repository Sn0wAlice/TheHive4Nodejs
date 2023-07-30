const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Admin API
 */
const Admin = class {
    /**
     * Update logs level
     * @param {string} packageName The name of the package to update
     * @param {string} level The level to set
     * @returns {Promise} The response of the request
     */
    async updateLogsLevel(
        packageName,
        level
    ) {
        // check the packageName is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, packageName)) {
            throw new Error('Package name must be between 1 and 512 characters')
        }

        if([!"ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "OFF"].includes(level)) {
            throw new Error('Level must be one of ALL, TRACE, DEBUG, INFO, WARN, ERROR, OFF')
        }

        return await fetchInstance.get(`/api/v1/admin/logs/set/${packageName}/${level}`)
    }

    /**
     * Trigger all checks
     * @returns {Promise} The response of the request
     */
    async triggerChecks() {
        return await fetchInstance.get('/api/v1/admin/check/_all/trigger')
    }
    
    /**
     * Trigger integrity check
     * @param {string} name The name of check to trigger
     * @returns {Promise} The response of the request
     */
    async triggerCheck(name) {
        // check the name is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, name)) {
            throw new Error('Name must be between 1 and 512 characters')
        }

        return await fetchInstance.get(`/api/v1/admin/check/${name}/trigger`)
    }

    /**
     * Trigger integrity check global
     * @param {string} name The name of check to trigger
     * @returns {Promise} The response of the request
     */
    async triggerCheckGlobal(name) {
        // check the name is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, name)) {
            throw new Error('Name must be between 1 and 512 characters')
        }

        return await fetchInstance.post(`/api/v1/admin/check/${name}/global/trigger`)
    }

    /**
     * Trigger integrity check dedup
     * @param {string} name The name of check to trigger
     * @returns {Promise} The response of the request
     */
    async triggerCheckDedup(name) {
        // check the name is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, name)) {
            throw new Error('Name must be between 1 and 512 characters')
        }

        return await fetchInstance.post(`/api/v1/admin/check/${name}/dedup/trigger`)
    }

    /**
     * Trigger integrity check cancel
     * @returns {Promise} The response of the request
     */
    async triggerCheckCancel() {
        return await fetchInstance.post('/api/v1/admin/check/cancel')
    }

    /**
     * Get check stats
     * @returns {Promise} The response of the request
     */
    async getCheckStats() {
        return await fetchInstance.get('/api/v1/admin/check/stats')
    }

    /**
     * Get Index status
     * @returns {Promise} The response of the request
     */
    async getIndexStatus() {
        return await fetchInstance.get('/api/v1/admin/index/status')
    }

    /**
     * Reindex data
     * @param {string} name The name of the index to reindex
     * @returns {Promise} The response of the request
     */
    async reindexData(name) {
        // check the name is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, name)) {
            throw new Error('Name must be between 1 and 512 characters')
        }

        return await fetchInstance.post(`/api/v1/admin/index/${name}/reindex`)
    }

    /**
     * Rebuild index
     * @param {string} name The name of the index to rebuild
     * @returns {Promise} The response of the request
     */
    async rebuildIndex(name) {
        // check the name is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, name)) {
            throw new Error('Name must be between 1 and 512 characters')
        }

        return await fetchInstance.post(`/api/v1/admin/index/${name}/rebuild`)
    }

    /**
     * Repair schema
     * @param {string} name The name of the index to repair
     * @param {string} select The select to use
     * @param {string} filter The filter to use
     * @returns {Promise} The response of the request
     */
    async repairSchema(
        name,
        select,
        filter
    ) {
        // check the name is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, name)) {
            throw new Error('Name must be between 1 and 512 characters')
        }

        return await fetchInstance.post(`/api/v1/admin/schema/repair/${name}`, {
            select: select,
            filter: filter
        })
    }

    /**
     * Schema info
     * @param {string} name The name of the index to repair
     * @param {string} select The select to use
     * @param {string} filter The filter to use
     * @returns {Promise} The response of the request
     */
    async schemainfos(
        name,
        select,
        filter
    ) {
        // check the name is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, name)) {
            throw new Error('Name must be between 1 and 512 characters')
        }

        return await fetchInstance.post(`/api/v1/admin/schema/info/${name}`, {
            select: select,
            filter: filter
        })
    }
}

module.exports.admin = new Admin()