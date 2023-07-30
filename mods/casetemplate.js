const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the CaseTemplate API
 */
const CaseTemplate = class {
    /**
     * Create case template
     * @param {string} name The name of the case template
     * @param {string} displayName The display name of the case template
     * @param {string} titlePrefix The title prefix of the case template
     * @param {string} description The description of the case template
     * @param {string} severity The severity of the case template
     * @param {string} tags The tags of the case template
     * @param {string} flag The flag of the case template
     * @param {string} tlp The tlp of the case template
     * @param {string} pap The pap of the case template
     * @param {string} summary The summary of the case template
     * @param {string} tasks The tasks of the case template
     * @param {string} pageTeplateIds The page template ids of the case template
     * @param {string} customFields The custom fields of the case template
     * @returns {Promise} The response of the request
     */
    async createCaseTemplate(
        name,
        displayName = null,
        titlePrefix = null,
        description = null,
        severity = 2,
        tags = [],
        flag= false,
        tlp = 2,
        pap = 2,
        summary = null,
        tasks = [],
        pageTeplateIds = [],
        customFields = []
    ) {
        // check name is string of max 128 characters
        if(!checks.checkSize(1, 128, name)) {
            throw new Error('name must be a string of max 128 characters')
        }

        // check displayName is string of max 128 characters
        if(displayName && !checks.checkSize(1, 128, displayName)) {
            throw new Error('displayName must be a string of max 128 characters')
        }

        // check titlePrefix is string of max 64 characters
        if(titlePrefix && !checks.checkSize(1, 64, titlePrefix)) {
            throw new Error('titlePrefix must be a string of max 64 characters')
        }

        // check description is string of max 1048576 characters
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('description must be a string of max 1048576 characters')
        }

        // check severity is number between 1 and 4
        if(!checks.checkNumber(1, 4, severity)) {
            throw new Error('severity must be a number between 1 and 4')
        }

        for(const tag of tags) {
            // check tag is string of max 128 characters
            if(!checks.checkSize(1, 128, tag)) {
                throw new Error('tag must be a string of max 128 characters')
            }
        }

        // check flag is boolean
        if(!typeof flag === 'boolean') {
            throw new Error('flag must be a boolean')
        }

        // check tlp is number between 0 and 4
        if(!checks.checkNumber(0, 4, tlp)) {
            throw new Error('tlp must be a number between 0 and 4')
        }

        // check pap is number between 0 and 3
        if(!checks.checkNumber(0, 3, pap)) {
            throw new Error('pap must be a number between 0 and 3')
        }

        // check summary is string of max 1048576 characters
        if(summary && !checks.checkSize(1, 1048576, summary)) {
            throw new Error('summary must be a string of max 1048576 characters')
        }

        // check pageTeplateIds is array of strings of max 128 characters that start with ~
        for(const pageTeplateId of pageTeplateIds) {
            if(!checks.checkSize(1, 128, pageTeplateId)) {
                throw new Error('pageTeplateId must be a string of max 128 characters')
            }
            if(!checks.checkStartsWith(pageTeplateId, '~')) {
                throw new Error('pageTeplateId must start with ~')
            }
        }

        return await fetchInstance.post('/api/v1/caseTemplate', {
            name: name,
            displayName: displayName,
            titlePrefix: titlePrefix,
            description: description,
            severity: severity,
            tags: tags,
            flag: flag,
            tlp: tlp,
            pap: pap,
            summary: summary,
            tasks: tasks,
            pageTeplateIds: pageTeplateIds,
            customFields: customFields
        })
    }

    /**
     * Get case template
     * @param {string} id The id of the case template
     * @returns {Promise} The response of the request
     */
    async getCaseTemplate(id) {
        // check id is string of max 128 characters
        if(!checks.checkSize(1, 128, id)) {
            throw new Error('id must be a string of max 128 characters')
        }

        return await fetchInstance.get(`/api/v1/caseTemplate/${id}`)
    }

    /**
     * Delete case template
     * @param {string} id The id of the case template
     * @returns {Promise} The response of the request
     */
    async deleteCaseTemplate(id) {
        // check id is string of max 128 characters
        if(!checks.checkSize(1, 128, id)) {
            throw new Error('id must be a string of max 128 characters')
        }

        return await fetchInstance.delete(`/api/v1/caseTemplate/${id}`)
    }

    /**
     * Update case template
     * @param {string} id The id of the case template
     * @param {string} name The name of the case template
     * @param {string} displayName The display name of the case template
     * @param {string} titlePrefix The title prefix of the case template
     * @param {string} description The description of the case template
     * @param {string} severity The severity of the case template
     * @param {string} tags The tags of the case template
     * @param {string} flag The flag of the case template
     * @param {string} tlp The tlp of the case template
     * @param {string} pap The pap of the case template
     * @param {string} summary The summary of the case template
     * @param {string} customFields The custom fields of the case template
     * @param {string} tasks The tasks of the case template
     * @returns {Promise} The response of the request
     */
    async updateCaseTemplate(
        id,
        name = null,
        displayName = null,
        titlePrefix = null,
        description = null,
        severity = null,
        tags = null,
        flag = null,
        tlp = null,
        pap = null,
        summary = null,
        customFields = null,
        tasks = null
    ) {
        // check id is string that starts with ~
        if(!checks.checkStartsWith(id, '~')) {
            throw new Error('id must start with ~')
        }

        // check name is string of max 128 characters
        if(name && !checks.checkSize(1, 128, name)) {
            throw new Error('name must be a string of max 128 characters')
        }

        // check displayName is string of max 128 characters
        if(displayName && !checks.checkSize(1, 128, displayName)) {
            throw new Error('displayName must be a string of max 128 characters')
        }

        // check titlePrefix is string of max 64 characters
        if(titlePrefix && !checks.checkSize(1, 64, titlePrefix)) {
            throw new Error('titlePrefix must be a string of max 64 characters')
        }

        // check description is string of max 1048576 characters
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('description must be a string of max 1048576 characters')
        }

        // check severity is number between 1 and 4
        if(severity && !checks.checkNumber(1, 4, severity)) {
            throw new Error('severity must be a number between 1 and 4')
        }

        for(const tag of tags) {
            // check tag is string of max 128 characters
            if(!checks.checkSize(1, 128, tag)) {
                throw new Error('tag must be a string of max 128 characters')
            }
        }

        // check flag is boolean
        if(flag && !typeof flag === 'boolean') {
            throw new Error('flag must be a boolean')
        }

        // check tlp is number between 0 and 4
        if(tlp && !checks.checkNumber(0, 4, tlp)) {
            throw new Error('tlp must be a number between 0 and 4')
        }

        // check pap is number between 0 and 3
        if(pap && !checks.checkNumber(0, 3, pap)) {
            throw new Error('pap must be a number between 0 and 3')
        }

        // check summary is string of max 1048576 characters
        if(summary && !checks.checkSize(1, 1048576, summary)) {
            throw new Error('summary must be a string of max 1048576 characters')
        }

        // check pageTeplateIds is array of strings of max 128 characters that start with ~
        for(const pageTeplateId of pageTeplateIds) {
            if(!checks.checkSize(1, 128, pageTeplateId)) {
                throw new Error('pageTeplateId must be a string of max 128 characters')
            }
            if(!checks.checkStartsWith(pageTeplateId, '~')) {
                throw new Error('pageTeplateId must start with ~')
            }
        }

        return await fetchInstance.patch(`/api/v1/caseTemplate/${id}`, {
            name: name,
            displayName: displayName,
            titlePrefix: titlePrefix,
            description: description,
            severity: severity,
            tags: tags,
            flag: flag,
            tlp: tlp,
            pap: pap,
            summary: summary,
            tasks: tasks,
            pageTeplateIds: pageTeplateIds,
            customFields: customFields
        })
    }

    /**
     * Link pages template to case template
     * @param {string} id The id of the case template
     * @param {string} pageTemplateIds The page template ids to link to the case template
     * @returns {Promise} The response of the request
     */
    async linkPageTemplatesToCaseTemplate(id, pageTemplateIds) {
        // check id is string that starts with ~
        if(!checks.checkStartsWith(id, '~')) {
            throw new Error('id must start with ~')
        }

        // check pageTeplateIds is array of strings of max 128 characters that start with ~
        for(const pageTeplateId of pageTeplateIds) {
            if(!checks.checkSize(1, 128, pageTeplateId)) {
                throw new Error('pageTeplateId must be a string of max 128 characters')
            }
            if(!checks.checkStartsWith(pageTeplateId, '~')) {
                throw new Error('pageTeplateId must start with ~')
            }
        }

        return await fetchInstance.post(`/api/v1/caseTemplate/${id}/pageTemplate/link`, {
            pageTeplateIds: pageTeplateIds
        })
    }
}

module.exports.casetemplate = new CaseTemplate()