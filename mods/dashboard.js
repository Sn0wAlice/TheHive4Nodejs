const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Dashboard API
 */
const Dashboard = class {
    /**
     * Create a dashboard
     * @param {string} title The title of the dashboard
     * @param {string} group The group of the dashboard
     * @param {string} description The description of the dashboard
     * @param {string} status The status of the dashboard
     * @param {string} definition The definition of the dashboard
     * @param {number} version The version of the dashboard
     * @returns {Promise} The response of the request
     */
    async createDashboard(
        title,
        group = null,
        description,
        status, 
        definition,
        version = 1,
    ) {
        // check the title is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, title)) {
            throw new Error('Title must be between 1 and 512 characters')
        }

        // check the group is a string between 1 and 512 characters
        if(group && !checks.checkSize(1, 512, group)) {
            throw new Error('Group must be between 1 and 512 characters')
        }

        // check the description is a string between 1 and 1048576 characters
        if(!checks.checkSize(1, 1048576, description)) {
            throw new Error('Description must be between 1 and 1048576 characters')
        }

        // check the status is "Private", "Shared" or "Public"
        if(['Private', 'Shared', 'Public'].indexOf(status) === -1) {
            throw new Error('Status must be "Private", "Shared" or "Public"')
        }

        // check version is a number between 1 and 100000
        if(!checks.checkNumber(1, 100000, version)) {
            throw new Error('Version must be a number between 1 and 100000')
        }

        // create the body
        const body = {
            title: title,
            group: group,
            description: description,
            status: status,
            definition: definition,
            version: version
        }

        // send the request
        return await fetchInstance.post('/api/v1/dashboard', body)
    }

    /**
     * Get a dashboard
     * @param {string} id The id of the dashboard
     * @returns {Promise} The response of the request
     */
    async getDashboard(id) {
        // check the id is a string starts with ~
        if(!checks.checkId(id)) {
            throw new Error('Id must start with ~')
        }

        // send the request
        return await fetchInstance.get(`/api/v1/dashboard/${id}`)
    }

    /**
     * delete a dashboard
     * @param {string} id The id of the dashboard
     * @returns {Promise} The response of the request
     */
    async deleteDashboard(id) {
        // check the id is a string starts with ~
        if(!checks.checkId(id)) {
            throw new Error('Id must start with ~')
        }

        // send the request
        return await fetchInstance.delete(`/api/v1/dashboard/${id}`)
    }

    /**
     * Update a dashboard
     * @param {string} dashboardId The id of the dashboard
     * @param {string} title The title of the dashboard
     * @param {string} group The group of the dashboard
     * @param {string} description The description of the dashboard
     * @param {string} definition The definition of the dashboard
     * @param {string} status The status of the dashboard
     * @param {number} version The version of the dashboard
     * @returns {Promise} The response of the request
     */
    async updateDashboard(
        dashboardId,
        title = null,
        group = null,
        description = null,
        definition = null,
        status = null,
        version = null
    ) {
        // check the id is a string starts with ~
        if(!checks.checkId(dashboardId)) {
            throw new Error('Id must start with ~')
        }

        // check the title is a string between 1 and 512 characters
        if(title && !checks.checkSize(1, 512, title)) {
            throw new Error('Title must be between 1 and 512 characters')
        }

        // check the group is a string between 1 and 32 characters
        if(group && !checks.checkSize(1, 32, group)) {
            throw new Error('Group must be between 1 and 32 characters')
        }

        // check the description is a string between 1 and 1048576 characters
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('Description must be between 1 and 1048576 characters')
        }

        // check the status is "Private", "Shared" or "Public"
        if(status && ['Private', 'Shared', 'Public'].indexOf(status) === -1) {
            throw new Error('Status must be "Private", "Shared" or "Public"')
        }

        // check version is a number between 1 and 100000
        if(version && !checks.checkNumber(1, 100000, version)) {
            throw new Error('Version must be a number between 1 and 100000')
        }

        // create the body
        const body = {
            title: title,
            group: group,
            description: description,
            definition: definition,
            status: status,
            version: version
        }

        // send the request
        return await fetchInstance.patch(`/api/v1/dashboard/${dashboardId}`, body)
    }

    /**
     * Change dashboard owner
     * @param {string} dashboardId The id of the dashboard
     * @param {string} userId The id of the user
     */
    async changeOwner(dashboardId, userId) {
        // check the id is a string starts with ~
        if(!checks.checkId(dashboardId)) {
            throw new Error('Id must start with ~')
        }

        // check the id is a string starts with ~
        if(!checks.checkId(userId) && !userId.includes('@')) {
            throw new Error('Id must start with ~ or be an email')
        }

        // create the body
        const body = {
            user: userId
        }

        // send the request
        return await fetchInstance.post(`/api/v1/dashboard/${dashboardId}/owner`, body)
    }
}

module.exports.dashboard = new Dashboard()