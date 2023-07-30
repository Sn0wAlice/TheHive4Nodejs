const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Task API
 */
const Task = class {

    /** 
     * Create a new task in a case
     * @param {string} caseId - The case ID
     * @param {string} title - The title of the task
     * @param {string} group - The group of the task
     * @param {string} description - The description of the task
     * @param {string} status - The status of the task
     * @param {boolean} flag - The flag of the task
     * @param {string} startDate - The start date of the task
     * @param {string} endDate - The end date of the task
     * @param {number} order - The order of the task
     * @param {string} dueDate - The due date of the task
     * @param {string} assignee - The assignee of the task
     * @param {boolean} mandatory - The mandatory of the task
     * @returns {Promise} - A promise that will resolve with the response body
     */
    async createTaskInCase(
        caseId,
        title,
        group = null,
        description = null,
        status = null,
        flag = null,
        startDate = null,
        endDate = null,
        order = null,
        dueDate = null,
        assignee = null,
        mandatory = null,
    ) {
        // check if the caseID start with ~
        if (!caseId.startsWith('~')) {
            throw new Error('caseId must start with ~')
        }

        //group must be string of 1 - 32 characters
        if (group && !checks.checkSize(1, 32, group)) {
            throw new Error('group must be string of 1 - 32 characters')
        }

        //title must be string of 1 - 128 characters
        if (!checks.checkSize(1, 128, title)) {
            throw new Error('title must be string of 1 - 128 characters')
        }

        //description must be string of 1 - 1048576 characters
        if (description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('description must be string of 1 - 1048576 characters')
        }

        //status must be string of 1 - 16 characters
        if (status && !checks.checkSize(1, 16, status)) {
            throw new Error('status must be string of 1 - 16 characters')
        }

        // flag must be a boolean
        if (flag && typeof flag !== 'boolean') {
            throw new Error('flag must be a boolean')
        }

        // order must be a number
        if (order && !checks.checkNumber(0, 2147483647, order)) {
            throw new Error('order must be a number')
        }

        // assignee must be a string of 1 - 32 characters
        if (assignee && !checks.checkSize(1, 32, assignee)) {
            throw new Error('assignee must be a string of 1 - 32 characters')
        }

        // mandatory must be a boolean
        if (mandatory && typeof mandatory !== 'boolean') {
            throw new Error('mandatory must be a boolean')
        }

        // build the body
        let body = {
            title: title,
            group: group,
            description: description,
            status: status,
            flag: flag,
            startDate: startDate,
            endDate: endDate,
            order: order,
            dueDate: dueDate,
            assignee: assignee,
            mandatory: mandatory,
        }

        // remove null values
        return await fetchInstance.post(`/api/v1/case/${caseId}/task`, body)
    }

    /**
     * Get a task
     * @param {string} taskId - The task ID
     * @returns {Promise} - A promise that will resolve with the response body
     */
    async getTask(
        taskId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        return await fetchInstance.get(`/api/v1/task/${taskId}`)
    }

    /**
     * Delete a task
     * @param {string} taskId - The task ID
     * @returns {Promise} - A promise that will resolve with the response body
     */
    async deleteTask(
        taskId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/task/${taskId}`)
    }

    /** 
     * Update a task
     * @param {string} taskId - The task ID
     * @param {string} title - The title of the task
     * @param {string} group - The group of the task
     * @param {string} description - The description of the task
     * @param {string} status - The status of the task
     * @param {boolean} flag - The flag of the task
     * @param {string} startDate - The start date of the task
     * @param {string} endDate - The end date of the task
     * @param {number} order - The order of the task
     * @param {string} dueDate - The due date of the task
     * @param {string} assignee - The assignee of the task
     * @param {boolean} mandatory - The mandatory of the task
     * @returns {Promise} - A promise that will resolve with the response body
     */
    async updateTask(
        taskId,
        title = null,
        group = null,
        description = null,
        status = null,
        flag = null,
        startDate = null,
        endDate = null,
        order = null,
        dueDate = null,
        assignee = null,
        mandatory = null,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        //group must be string of 1 - 32 characters
        if (group && !checks.checkSize(1, 32, group)) {
            throw new Error('group must be string of 1 - 32 characters')
        }

        //title must be string of 1 - 128 characters
        if (title && !checks.checkSize(1, 128, title)) {
            throw new Error('title must be string of 1 - 128 characters')
        }

        //description must be string of 1 - 1048576 characters
        if (description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('description must be string of 1 - 1048576 characters')
        }

        //status must be string of 1 - 16 characters
        if (status && !checks.checkSize(1, 16, status)) {
            throw new Error('status must be string of 1 - 16 characters')
        }

        // flag must be a boolean
        if (flag && typeof flag !== 'boolean') {
            throw new Error('flag must be a boolean')
        }

        // order must be a number
        if (order && !checks.checkNumber(0, 2147483647, order)) {
            throw new Error('order must be a number')
        }

        // assignee must be a string of 1 - 32 characters
        if (assignee && !checks.checkSize(1, 32, assignee)) {
            throw new Error('assignee must be a string of 1 - 32 characters')
        }

        // mandatory must be a boolean
        if (mandatory && typeof mandatory !== 'boolean') {
            throw new Error('mandatory must be a boolean')
        }

        // build the body
        let body = {
            title: title,
            group: group,
            description: description,
            status: status,
            flag: flag,
            startDate: startDate,
            endDate: endDate,
            order: order,
            dueDate: dueDate,
            assignee: assignee,
            mandatory: mandatory,
        }

        // send the data
        return await fetchInstance.patch(`/api/v1/task/${taskId}`, body)
    }

    /**
     * Bulk update tasks
     * @param {string[]} taskIds - The task IDs
     * @param {string} title - The title of the task
     * @param {string} group - The group of the task
     * @param {string} description - The description of the task
     * @param {string} status - The status of the task
     * @param {boolean} flag - The flag of the task
     * @param {string} startDate - The start date of the task
     * @param {string} endDate - The end date of the task
     * @param {number} order - The order of the task
     * @param {string} dueDate - The due date of the task
     * @param {string} assignee - The assignee of the task
     * @param {boolean} mandatory - The mandatory of the task
     * @returns {Promise} - A promise that will resolve with the response body
     */
    async bulkUpdateTask(
        taskIds,
        title = null,
        group = null,
        description = null,
        status = null,
        flag = null,
        startDate = null,
        endDate = null,
        order = null,
        dueDate = null,
        assignee = null,
        mandatory = null,
    ) {
        // check all the id
        for (let taskId of taskIds) {
            if (!taskId.startsWith('~')) {
                throw new Error('taskId must start with ~')
            }
        }

        let stack = []
        for(let taskId of taskIds) {
            let r = await this.updateTask(
                taskId,
                title,
                group,
                description,
                status,
                flag,
                startDate,
                endDate,
                order,
                dueDate,
                assignee,
                mandatory,
            )

            stack.push(r)
        }

        return stack
    }


    /**
     *  Get the action required for a task
     * @param {string} taskId - The task ID
     * @returns {Promise} - A promise that will resolve with the response body
     */
    async taskAsctionRequired(
        taskId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        return await fetchInstance.get(`/api/v1/task/${taskId}/actionRequired`)
    }

    /**
     * Set task action required
     * @param {string} taskId - The task ID
     * @param {string} orgId - The org ID
     */
    async setTaskActionRequired(
        taskId,
        orgId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        // check if the orgId start with ~
        if (!orgId.startsWith('~')) {
            throw new Error('orgId must start with ~')
        }

        return await fetchInstance.put(`/api/v1/task/${taskId}/actionRequired/${orgId}`)
    }

    /**
     * Set task action as done
     * @param {string} taskId - The task ID
     * @param {string} orgId - The org ID
     */
    async setTaskActionDone(
        taskId,
        orgId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        // check if the orgId start with ~
        if (!orgId.startsWith('~')) {
            throw new Error('orgId must start with ~')
        }

        return await fetchInstance.put(`/api/v1/task/${taskId}/actionDone/${orgId}`)
    }


    /**
     * List shares of task
     * @param {string} taskId - The task ID
     */
    async listSharesOfTask(
        taskId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        return await fetchInstance.get(`/api/v1/task/${taskId}/shares`)
    }

    /**
     * Share task
     * @param {string} taskId - The task ID
     * @param {string} orgId - The org ID
     */
    async shareTask(
        taskId,
        orgId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        // check if the orgId start with ~
        if (!orgId.startsWith('~')) {
            throw new Error('orgId must start with ~')
        }

        return await fetchInstance.put(`/api/v1/task/${taskId}/shares`, {
            organisations: orgId,
        })
    }

    /**
     * Unshare task
     * @param {string} taskId - The task ID
     * @param {string} orgId - The org ID
     */
    async unshareTask(
        taskId,
        orgId,
    ) {
        // check if the taskId start with ~
        if (!taskId.startsWith('~')) {
            throw new Error('taskId must start with ~')
        }

        // check if the orgId start with ~
        if (!orgId.startsWith('~')) {
            throw new Error('orgId must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/task/${taskId}/shares/${orgId}`)
    }

}

module.exports.task = new Task()