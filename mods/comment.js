const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the comment API
 */
const Comment = class {
    /**
     * Create a new comment in a case
     * @param {string} caseId The id of the case
     * @param {string} message The message of the comment
     * @returns {Promise} A promise that contains the created comment
     */
    async create(
        caseId,
        message
    ) {
        // caseId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of max 64 chars and start with ~")
        }

        // message is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 chars")
        }

        return await fetchInstance.post(`/api/v1/case/${caseId}/comment`,{
                message: message
            }
        )
    }

    /**
     * Create a new comment in an alert
     * @param {string} alertid The id of the alert
     * @param {string} message The message of the comment
     * @returns {Promise} A promise that contains the created comment
     */
    async create(
        alertid,
        message
    ) {
        // alertid is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, alertid) || !alertid.startsWith("~")) {
            throw new Error("alertid must be a string of max 64 chars and start with ~")
        }

        // message is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 chars")
        }

        return await fetchInstance.post(`/api/v1/alert/${alertid}/comment`,{
                message: message
            }
        )
    }

    /**
     * Delete comment by id
     * @param {string} id The id of the comment
     * @returns {Promise} A promise that contains the deleted comment
     */
    async delete(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/comment/${id}`)
    }

    /**
     * Update comment by id
     * @param {string} id The id of the comment
     * @param {string} message The message of the comment
     * @returns {Promise} A promise that contains the updated comment
     */
    async update(
        id,
        message
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // message is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 chars")
        }

        return await fetchInstance.patch(`/api/v1/comment/${id}`,{
                message: message
            }
        )
    }
}

module.exports.comment = new Comment()