const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the CaseReportTemplate API
 */
const CaseReportTemplate = class {
    /**
     * Create case report template
     * @param {string} title The title of the case report template
     * @param {string} group The group of the case report template
     * @param {string} description The description of the case report template
     * @param {string} definition The definition of the case report template
     * @param {string} version The version of the case report template
     * @returns {Promise} The response of the request
     */
    async createCaseReportTemplate(
        title,
        group,
        description,
        definition,
        version
    ) {
        // checks title is a string of max 512 characters
        if(!checks.checkSize(1, 512, title)) {
            throw new Error('title must be a string of max 512 characters')
        }

        // checks group is a string of max 512 characters
        if(!checks.checkSize(1, 512, group)) {
            throw new Error('group must be a string of max 512 characters')
        }

        // checks description is a string of max 1048576 characters
        if(!checks.checkSize(1, 1048576, description)) {
            throw new Error('description must be a string of max 1048576 characters')
        }

        // check version is between 0 and 999999
        if(!checks.checkRange(0, 999999, version)) {
            throw new Error('version must be between 0 and 999999')
        }

        return await fetchInstance.post(`/api/v1/casereportemplate`, {
            title: title,
            group: group,
            description: description,
            definition: definition,
            version: version
        })
    }

    /**
     * Get case report template by id
     * @param {string} id The id of the case report template
     * @returns {Promise} The response of the request
     */
    async getCaseReportTemplateById(id) {
        return await fetchInstance.get(`/api/v1/casereportemplate/${id}`)
    }

    /**
     * Delete case report template by id
     * @param {string} id The id of the case report template
     * @returns {Promise} The response of the request
     */
    async deleteCaseReportTemplateById(id) {
        return await fetchInstance.delete(`/api/v1/casereportemplate/${id}`)
    }

    /**
     * Update case report template by id
     * @param {string} id The id of the case report template
     * @param {string} title The title of the case report template
     * @param {string} group The group of the case report template
     * @param {string} description The description of the case report template
     * @param {string} definition The definition of the case report template
     * @param {string} version The version of the case report template
     * @returns {Promise} The response of the request
     */
    async updateCaseReportTemplateById(
        id,
        title = null,
        group = null,
        description = null,
        definition = null,
        version = null
    ) {
        // check the id starts with "~"
        if (!checks.startsWithTilde(id)) {
            throw new Error('The id must start with "~"')
        }

        // checks title is a string of max 512 characters
        if(!checks.checkSize(1, 512, title)) {
            throw new Error('title must be a string of max 512 characters')
        }

        // checks group is a string of max 512 characters
        if(!checks.checkSize(1, 512, group)) {
            throw new Error('group must be a string of max 512 characters')
        }

        // checks description is a string of max 1048576 characters
        if(!checks.checkSize(1, 1048576, description)) {
            throw new Error('description must be a string of max 1048576 characters')
        }   

        // check version is between 0 and 999999
        if(!checks.checkRange(0, 999999, version)) {
            throw new Error('version must be between 0 and 999999')
        }

        return await fetchInstance.put(`/api/v1/casereportemplate/${id}`, {
            title: title,
            group: group,
            description: description,
            definition: definition,
            version: version
        })
    }

    /**
     * Get case report templates options
     * @returns {Promise} The response of the request
     */
    async getCaseReportTemplatesOptions() {
        return await fetchInstance.get(`/api/v1/casereportemplate/_info`)
    }

    /**
     * Create attachment to case report template
     * @param {string} id The id of the case report template
     * @param {string[]} attachment The attachment of the case report template
     * @param {boolean} canrename The canrename of the case report template
     */
    async createAttachmentToCaseReportTemplate(
        id,
        attachment,
        canrename = true
    ) {
        // check the id starts with "~"
        if (!checks.startsWithTilde(id)) {
            throw new Error('The id must start with "~"')
        }

        return await fetchInstance.post(`/api/v1/casereportemplate/${id}/attachment`, {
            attachment: attachment,
            canrename: canrename
        })
    }

    /**
     * Get attachment of case report template
     * @param {string} id The id of the case report template
     * @param {string} attachmentid The attachmentid of the case report template
     * @returns {Promise} The response of the request
     */
    async getAttachmentOfCaseReportTemplate(
        id,
        attachmentid
    ) {
        // check the id starts with "~"
        if (!checks.startsWithTilde(id)) {
            throw new Error('The id must start with "~"')
        }

        // check the attachmentid starts with "~"
        if (!checks.startsWithTilde(attachmentid)) {
            throw new Error('The attachmentid must start with "~"')
        }

        return await fetchInstance.get(`/api/v1/casereportemplate/${id}/attachment/${attachmentid}`)
    }

    /**
     * Delete attachment of case report template
     * @param {string} id The id of the case report template
     * @param {string} attachmentid The attachmentid of the case report template
     * @returns {Promise} The response of the request
     */
    async deleteAttachmentOfCaseReportTemplate(
        id,
        attachmentid
    ) {
        // check the id starts with "~"
        if (!checks.startsWithTilde(id)) {
            throw new Error('The id must start with "~"')
        }

        // check the attachmentid starts with "~"
        if (!checks.startsWithTilde(attachmentid)) {
            throw new Error('The attachmentid must start with "~"')
        }

        return await fetchInstance.delete(`/api/v1/casereportemplate/${id}/attachment/${attachmentid}`)
    }

    /**
     * Download attachment of case report template
     * @param {string} id The id of the case report template
     * @param {string} attachmentid The attachmentid of the case report template
     * @returns {Promise} The response of the request
     */
    async downloadAttachmentOfCaseReportTemplate(
        id,
        attachmentid
    ) {
        // check the id starts with "~"
        if (!checks.startsWithTilde(id)) {
            throw new Error('The id must start with "~"')
        }

        // check the attachmentid starts with "~"
        if (!checks.startsWithTilde(attachmentid)) {
            throw new Error('The attachmentid must start with "~"')
        }

        return await fetchInstance.get(`/api/v1/casereportemplate/${id}/attachment/${attachmentid}/download`)
    }
}

module.exports.casereporttemplate = new CaseReportTemplate()