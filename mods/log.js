const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Log API
 */
const Log = class {
    /**
     * Download attachments from log
     * @param {string} id The id of the log
     * @param {string} attachmentId The id of the attachment
     * @returns {Promise} The response of the request
     */
    async downloadAttachment(
        id,
        attachmentId
    ) {
        // check the id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        // same for attachmentId
        if(!attachmentId.startsWith('~')) {
            throw new Error('Attachment id must start with ~')
        }

        return await fetchInstance.get(`/api/v1/log/${id}/attachment/${attachmentId}/download`)
    }

    /**
     * Get Attachment from log
     * @param {string} caseId The id of the case
     * @param {string} attachmentId The id of the attachment
     * @returns {Promise} The response of the request
     */
    async getAttachment(
        id,
        attachmentId
    ) {
        // check the id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        // same for attachmentId
        if(!attachmentId.startsWith('~')) {
            throw new Error('Attachment id must start with ~')
        }

        return await fetchInstance.get(`/api/v1/log/${id}/attachment/${attachmentId}`)
    }

    /**
     * Get attachments from observable
     * @param {string} observableId The id of the observable
     * @param {string} attachmentId The id of the attachment
     * @returns {Promise} The response of the request
     */
    async getAttachmentsFromObservable(
        observableId,
        attachmentId
    ) {
        // check the observableId starts with '~'
        if(!observableId.startsWith('~')) {
            throw new Error('Observable id must start with ~')
        }

        // same for attachmentId
        if(!attachmentId.startsWith('~')) {
            throw new Error('Attachment id must start with ~')
        }

        return await fetchInstance.get(`/api/v1/observable/${observableId}/attachment/${attachmentId}`)
    }
}

module.exports.log = new Log()