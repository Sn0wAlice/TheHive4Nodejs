const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the task-log API
 */
const TaskLog = class {
    /**
     * Create a new task-log
     * @param {string} taskId The id of the task-log
     * @param {string} message The message of the task-log
     * @param {string} startDate The start date of the task-log
     * @param {string} includeInTimeline The includeInTimeline of the task-log
     * @param {string} attachments The attachments of the task-log
     * @returns {Promise} A promise that contains the created task-log
     */
    async create(
        taskId,
        message,
        startDate,
        includeInTimeline,
        attachments = []
    ) {
        // taskId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, taskId) || !taskId.startsWith("~")) {
            throw new Error("taskId must be a string of max 64 chars and start with ~")
        }

        // message is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 chars")
        }


        return await fetchInstance.post(`/api/v1/task/${taskId}/lof`,{
                message: message,
                startDate: startDate,
                includeInTimeline: includeInTimeline,
                attachments: attachments
            }
        )
    }

    /**
     * Delete task-log by id
     * @param {string} id The id of the task-log
     * @returns {Promise} A promise that contains the deleted task-log
     */
    async delete(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/log/${id}`)
    }

    /**
     * Update task-log by id
     * @param {string} id The id of the task-log
     * @param {string} message The message of the task-log
     * @param {string} includeInTimeline The includeInTimeline of the task-log
     * @returns {Promise} A promise that contains the updated task-log
     */
    async update(
        id,
        message = null,
        includeInTimeline = null
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // message is a string of max 1048576 chars
        if (message != null && !checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 chars")
        }

        return await fetchInstance.patch(`/api/v1/log/${id}`,{
                message: message,
                includeInTimeline: includeInTimeline
            }
        )
    }

    /**
     * Add attachments to task-log by id
     * @param {string} id The id of the task-log
     * @param {string[]} attachments The attachments of the task-log
     * @returns {Promise} A promise that contains the updated task-log
     */
    async addAttachments(
        id,
        attachments = []
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.patch(`/api/v1/log/${id}/attachments`,{
                attachments: attachments
            }
        )
    }


    /**
     * Delete attachments from task-log by id
     * @param {string} id The id of the task-log
     * @param {string} attachmentid The attachmentid of the task-log
     * @returns {Promise} A promise that contains the updated task-log
     */
    async deleteAttachment(
        id,
        attachmentid
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/log/${id}/attachments/${attachmentid}`)
    }
}

module.exports.tasklog = new TaskLog()