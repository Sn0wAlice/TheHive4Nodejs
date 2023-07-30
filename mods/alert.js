const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * Alert class to manage alerts
 */
const Alert = class {
    /**
     * Create a new alert
     * @param {string} type - The type of the alert
     * @param {string} source - The source of the alert
     * @param {string} sourceRef - The sourceRef of the alert
     * @param {string} externalLink - The externalLink of the alert
     * @param {string} title - The title of the alert
     * @param {string} description - The description of the alert
     * @param {number} severity - The severity of the alert
     * @param {number} date - The date of the alert
     * @param {string[]} tags - The tags of the alert
     * @param {boolean} flag - The flag of the alert
     * @param {number} tlp - The tlp of the alert
     * @param {number} pap - The pap of the alert
     * @param {object[]} customFields - The customFields of the alert
     * @param {string} summary - The summary of the alert
     * @param {string} assignee - The assignee of the alert
     * @param {string} caseTemplate - The caseTemplate of the alert
     * @param {object[]} observables - The observables of the alert
     * @param {object[]} procedures - The procedures of the alert
     * @returns {Promise<object>} - The response
     */
    async create(
        type, 
        source, 
        sourceRef, 
        externalLink = null,
        title,
        description,
        severity = 2,
        date = Date.now(),
        tags = [],
        flag = false,
        tlp = 2,
        pap = 2,
        customFields = [],
        summary = null,
        status = 'New',
        assignee = null,
        caseTemplate = null,
        observables = [],
        procedures = []
    ) {
        // Check if the type is valid, 1 - 32 characters
        if(!checks.checkSize(1, 32, type)) {
            throw new Error('Invalid type, must be between 1 and 32 characters')
        }

        // Check if the source is valid, 1 - 32 characters
        if(!checks.checkSize(1, 32, source)) {
            throw new Error('Invalid source, must be between 1 and 32 characters')
        }

        // Check if the sourceRef is valid, 1 - 128 characters
        if(!checks.checkSize(1, 128, sourceRef)) {
            throw new Error('Invalid sourceRef, must be between 1 and 128 characters')
        }

        // Check if the externalLink is valid, 1 - 512 characters
        if(externalLink && !checks.checkSize(1, 512, externalLink)) {
            throw new Error('Invalid externalLink, must be between 1 and 512 characters')
        }

        // Check if the title is valid, 1 - 512 characters
        if(!checks.checkSize(1, 512, title)) {
            throw new Error('Invalid title, must be between 1 and 512 characters')
        }

        // Check if the description is valid, 1 - 1048576 characters
        if(!checks.checkSize(1, 1048576, description)) {
            throw new Error('Invalid description, must be between 1 and 1048576 characters')
        }

        // severity must be a number between 1 and 4
        if(!checks.checkNumber(1, 4, severity)) {
            throw new Error('Invalid severity, must be a number between 1 and 4')
        }

        // date must be a number
        if(isNaN(date)) {
            throw new Error('Invalid date, must be a number')
        }

        for(let i = 0; i < tags.length; i++) {
            // Check if the tag is valid, 1 - 32 characters
            if(!checks.checkSize(1, 128, tags[i])) {
                throw new Error('Invalid tag, must be between 1 and 128 characters')
            }
        }

        // flag must be a boolean
        if(typeof flag !== 'boolean') {
            throw new Error('Invalid flag, must be a boolean')
        }

        // tlp must be a number between 0 and 4
        if(!checks.checkNumber(0, 4, tlp)) {
            throw new Error('Invalid tlp, must be a number between 0 and 4')
        }

        // pap must be a number between 0 and 3
        if(!checks.checkNumber(0, 3, pap)) {
            throw new Error('Invalid pap, must be a number between 0 and 3')
        }

        // summary must be a string of 1 - 1048576 characters
        if(summary && !checks.checkSize(1, 1048576, summary)) {
            throw new Error('Invalid summary, must be between 1 and 1048576 characters')
        }

        // assignee must be a string of 1 - 64 characters
        if(assignee && !checks.checkSize(1, 64, assignee)) {
            throw new Error('Invalid assignee, must be between 1 and 64 characters')
        }

        // status must be a string of 1 - 64 characters
        if(!checks.checkSize(1, 64, status)) {
            throw new Error('Invalid status, must be between 1 and 64 characters')
        }

        // caseTemplate must be a string of 1 - 128 characters
        if(caseTemplate && !checks.checkSize(1, 128, caseTemplate)) {
            throw new Error('Invalid caseTemplate, must be between 1 and 128 characters')
        }

        // create the body
        let body = {
            type: type,
            source: source,
            sourceRef: sourceRef,
            title: title,
            description: description,
            severity : severity,
            date: date,
            tags: tags,
            flag: flag,
            tlp: tlp,
            pap: pap,
            customFields: customFields,
            summary: summary,
            status: status,
            assignee: assignee,
            caseTemplate: caseTemplate,
            observables: observables,
            procedures: procedures
        }

        // send the request
        return await fetchInstance.post('/api/v1/alert', body)
    }


    /**
     * Get an alert
     * @param {string} id - The id of the alert
     * @returns {Promise<object>} - The response
     */
    async get(id) {
        // Check if the id is valid
        if(!checks.checkSize(1, 64, id)) {
            throw new Error('Invalid id, must be between 1 and 64 characters')
        }

        // send the request
        return await fetchInstance.get(`/api/v1/alert/${id}`)
    }

    /**
     * Delete an alert
     * @param {string} id - The id of the alert
     * @returns {Promise<object>} - The response
     */
    async delete(id) {
        // Check if the id is valid
        if(!checks.checkSize(1, 64, id)) {
            throw new Error('Invalid id, must be between 1 and 64 characters')
        }

        // send the request
        return await fetchInstance.delete(`/api/v1/alert/${id}`)
    }

    /**
     * Update an alert
     * @param {string} alertId - The id of the alert
     * @param {string} type - The type of the alert
     * @param {string} source - The source of the alert
     * @param {string} sourceRef - The sourceRef of the alert
     * @param {string} externalLink - The externalLink of the alert
     * @param {string} title - The title of the alert
     * @param {string} description - The description of the alert
     * @param {number} severity - The severity of the alert
     * @param {number} date - The date of the alert
     * @param {number} lastSyncDate - The lastSyncDate of the alert
     * @param {string[]} tags - The tags of the alert
     * @param {boolean} flag - The flag of the alert
     * @param {number} tlp - The tlp of the alert
     * @param {number} pap - The pap of the alert
     * @param {boolean} follow - The follow of the alert
     * @param {object} customFields - The customFields of the alert
     * @param {string} summary - The summary of the alert
     * @param {string} assignee - The assignee of the alert
     * @param {string} status - The status of the alert
     * @param {string[]} addTags - The addTags of the alert
     * @param {string[]} removeTags - The removeTags of the alert
     * @returns {Promise<object>} - The response
     * 
     */
    async update(
        alertId,
        type = null,
        source = null,
        sourceRef = null,
        externalLink = null,
        title = null,
        description = null,
        severity = null,
        date = null,
        lastSyncDate = null,
        tags = null,
        tlp = null,
        pap = null,
        follow = null,
        customFields = null,
        summary = null,
        assignee = null,
        status = null,
        addTags = null,
        removeTags = null,
    ) {
        // Check if the id is valid
        if(!alertId.startsWith('~')) {
            throw new Error('Invalid alert id, must start with ~')
        }

        // Check if the type is valid, 1 - 32 characters
        if(type && !checks.checkSize(1, 32, type)) {
            throw new Error('Invalid type, must be between 1 and 32 characters')
        }

        // Check if the source is valid, 1 - 32 characters
        if(source && !checks.checkSize(1, 32, source)) {
            throw new Error('Invalid source, must be between 1 and 32 characters')
        }

        // Check if the sourceRef is valid, 1 - 128 characters
        if(sourceRef && !checks.checkSize(1, 128, sourceRef)) {
            throw new Error('Invalid sourceRef, must be between 1 and 128 characters')
        }

        // Check if the externalLink is valid, 1 - 512 characters
        if(externalLink && !checks.checkSize(1, 512, externalLink)) {
            throw new Error('Invalid externalLink, must be between 1 and 512 characters')
        }

        // Check if the title is valid, 1 - 512 characters
        if(title && !checks.checkSize(1, 512, title)) {
            throw new Error('Invalid title, must be between 1 and 512 characters')
        }

        // Check if the description is valid, 1 - 1048576 characters
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('Invalid description, must be between 1 and 1048576 characters')
        }

        // severity must be a number between 1 and 4
        if(severity && !checks.checkNumber(1, 4, severity)) {
            throw new Error('Invalid severity, must be a number between 1 and 4')
        }

        // date must be a number
        if(date && isNaN(date)) {
            throw new Error('Invalid date, must be a number')
        }

        // lastSyncDate must be a number
        if(lastSyncDate && isNaN(lastSyncDate)) {
            throw new Error('Invalid lastSyncDate, must be a number')
        }

        // tags must be an array of strings
        for(let tag of tags) {
            if(!checks.checkSize(1, 128, tag)) {
                throw new Error('Invalid tag, must be between 1 and 128 characters')
            }
        }

        // tlp must be a number between 0 and 4
        if(tlp && !checks.checkNumber(0, 4, tlp)) {
            throw new Error('Invalid tlp, must be a number between 0 and 4')
        }

        // pap must be a number between 0 and 3
        if(pap && !checks.checkNumber(0, 3, pap)) {
            throw new Error('Invalid pap, must be a number between 0 and 3')
        }

        // follow must be a boolean
        if(follow && typeof follow !== 'boolean') {
            throw new Error('Invalid follow, must be a boolean')
        }

        // status must be a string of 1 - 64 characters
        if(status && !checks.checkSize(1, 64, status)) {
            throw new Error('Invalid status, must be between 1 and 64 characters')
        }

        // summary must be a string of 1 - 1048576 characters
        if(summary && !checks.checkSize(1, 1048576, summary)) {
            throw new Error('Invalid summary, must be between 1 and 1048576 characters')
        }

        // assignee must be a string of 1 - 64 characters
        if(assignee && !checks.checkSize(1, 64, assignee)) {
            throw new Error('Invalid assignee, must be between 1 and 64 characters')
        }

        // addTags must be an array of strings
        for(let tag of addTags) {
            if(!checks.checkSize(1, 128, tag)) {
                throw new Error('Invalid addTag, must be between 1 and 128 characters')
            }
        }

        // removeTags must be an array of strings
        for(let tag of removeTags) {
            if(!checks.checkSize(1, 128, tag)) {
                throw new Error('Invalid removeTag, must be between 1 and 128 characters')
            }
        }

        // Build the body
        let body = {
            id: alertId,
            type: type,
            source: source,
            sourceRef: sourceRef,
            externalLink: externalLink,
            title: title,
            description: description,
            severity: severity,
            date: date,
            lastSyncDate: lastSyncDate,
            tags: tags,
            tlp: tlp,
            pap: pap,
            follow: follow,
            customFields: customFields,
            summary: summary,
            assignee: assignee,
            status: status,
            addTags: addTags,
            removeTags: removeTags
        }

        // send the request
        return await fetchInstance.patch(`/api/v1/alert/${alertId}`, body)
    }

    /**
     * Bulk update alerts
     * @param {Array} alertIds - An array of alert ids to update
     * @param {String} type - The type of the alert
     * @param {String} source - The source of the alert
     * @param {String} sourceRef - The source reference of the alert
     * @param {String} externalLink - The external link of the alert
     * @param {String} title - The title of the alert
     * @param {String} description - The description of the alert
     * @param {Number} severity - The severity of the alert
     * @param {Number} date - The date of the alert
     * @param {Number} lastSyncDate - The last sync date of the alert
     * @param {Array} tags - The tags of the alert
     * @param {Number} tlp - The TLP of the alert
     * @param {Number} pap - The PAP of the alert
     * @param {Boolean} follow - The follow status of the alert
     * @param {Object} customFields - The custom fields of the alert
     * @param {String} summary - The summary of the alert
     * @param {String} assignee - The assignee of the alert
     * @param {String} status - The status of the alert
     * @param {Array} addTags - The tags to add to the alert
     * @param {Array} removeTags - The tags to remove from the alert
     * @returns {Promise} - A promise which resolves to the response body
     */
    async bulkupdate(
        alertIds,
        type = null,
        source = null,
        sourceRef = null,
        externalLink = null,
        title = null,
        description = null,
        severity = null,
        date = null,
        lastSyncDate = null,
        tags = null,
        tlp = null,
        pap = null,
        follow = null,
        customFields = null,
        summary = null,
        assignee = null,
        status = null,
        addTags = null,
        removeTags = null,
    ) {
        // check all the alert ids
        for(let alertId of alertIds) {
            if(!alertId.startsWith('~')) {
                throw new Error('Invalid alert id, must start with ~')
            }
        }

        let stack = []
        for(let alertId of alertIds) {
            const r = await this.update(
                alertId,
                type,
                source,
                sourceRef,
                externalLink,
                title,
                description,
                severity,
                date,
                lastSyncDate,
                tags,
                tlp,
                pap,
                follow,
                customFields,
                summary,
                assignee,
                status,
                addTags,
                removeTags,
            )
            stack.push(r)
        }

        return stack
    }

    /**
     * Create a case from an alert
     * @param {String} alertId - The id of the alert to create the case from
     * @param {String} title - The title of the case
     * @param {String} description - The description of the case
     * @param {Number} severity - The severity of the case
     * @param {Number} startDate - The start date of the case
     * @param {Number} endDate - The end date of the case
     * @param {Array} tags - The tags of the case
     * @param {String} flag - The flag of the case
     * @param {Number} tlp - The TLP of the case
     * @param {Number} pap - The PAP of the case
     * @param {String} status - The status of the case
     * @param {String} summary - The summary of the case
     * @param {String} assignee - The assignee of the case
     * @param {Object} customFields - The custom fields of the case
     * @param {String} caseTemplate - The case template of the case
     * @param {Array} tasks - The tasks of the case
     * @param {Array} pages - The pages of the case
     * @param {Array} sharingParameters - The sharing parameters of the case
     * @param {String} taskRule - The task rule of the case
     * @param {String} observableRule - The observable rule of the case
     * @returns {Promise} - A promise which resolves to the response body
     */
    async createCaseFromAlert(
        alertId,
        title = null,
        description = null,
        severity = null,
        startDate = null,
        endDate = null,
        tags = null,
        flag = null,
        tlp = null,
        pap = null,
        status = null,
        summary = null,
        assignee = null,
        customFields = null,
        caseTemplate = null,
        tasks = null,
        pages = null,
        sharingParameters = null,
        taskRule = null,
        observableRule = null,
    ) {
        // check the alert id
        if(!alertId.startsWith('~')) {
            throw new Error('Invalid alert id, must start with ~')
        }

        // check the title
        if(title && !checks.checkSize(1, 128, title)) {
            throw new Error('Invalid title, must be between 1 and 128 characters')
        }

        // check the description
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error('Invalid description, must be between 1 and 1048576 characters')
        }

        // check the severity
        if(severity && !checks.checkNumber(1, 4, severity)) {
            throw new Error('Invalid severity, must be between 1 and 4')
        }

        // check the tags
        for(let tag of tags) {
            if(!checks.checkSize(1, 128, tag)) {
                throw new Error('Invalid tag, must be between 1 and 128 characters')
            }
        }

        // check the flag
        if(flag && typeof flag !== 'boolean') {
            throw new Error('Invalid flag, must be a boolean')
        }

        // check the tlp
        if(tlp && !checks.checkNumber(0, 4, tlp)) {
            throw new Error('Invalid tlp, must be between 0 and 3')
        }

        // check the pap
        if(pap && !checks.checkNumber(0, 4, pap)) {
            throw new Error('Invalid pap, must be between 0 and 3')
        }

        // check the status -> 1 - 64 characters
        if(status && !checks.checkSize(1, 64, status)) {
            throw new Error('Invalid status, must be between 1 and 64 characters')
        }

        // check the summary -> 1 - 1048576 characters
        if(summary && !checks.checkSize(1, 1048576, summary)) {
            throw new Error('Invalid summary, must be between 1 and 1048576 characters')
        }

        // check the assignee -> 1 - 128 characters
        if(assignee && !checks.checkSize(1, 128, assignee)) {
            throw new Error('Invalid assignee, must be between 1 and 128 characters')
        }

        // check the case template
        if(caseTemplate && !checks.checkSize(1, 128, caseTemplate)) {
            throw new Error('Invalid case template, must be between 1 and 128 characters')
        }

        // check the taskRule
        if(taskRule && !checks.checkSize(1, 128, taskRule)) {
            throw new Error('Invalid task rule, must be between 1 and 128 characters')
        }

        // check the observableRule
        if(observableRule && !checks.checkSize(1, 128, observableRule)) {
            throw new Error('Invalid observable rule, must be between 1 and 128 characters')
        }

        // generate the request body
        let body = {
            title: title,
            description: description,
            severity: severity,
            startDate: startDate,
            endDate: endDate,
            tags: tags,
            flag: flag,
            tlp: tlp,
            pap: pap,
            status: status,
            summary: summary,
            assignee: assignee,
            customFields: customFields,
            caseTemplate: caseTemplate,
            tasks: tasks,
            pages: pages,
            sharingParameters: sharingParameters,
            taskRule: taskRule,
            observableRule: observableRule
        }

        return await fetchInstance.post(`/api/v1/alert/${alertId}/case`, body)

    }


    /**
     * Follow an alert
     * @param {String} alertId - The id of the alert to follow
     * @returns {Promise} - A promise which resolves to the response body
     */
    async followAlert(
        alertId,
    ) {
        // check the alert id
        if(!alertId.startsWith('~')) {
            throw new Error('Invalid alert id, must start with ~')
        }

        return await fetchInstance.post(`/api/v1/alert/${alertId}/follow`)
    }

    /**
     * Unfollow an alert
     * @param {String} alertId - The id of the alert to unfollow
     * @returns {Promise} - A promise which resolves to the response body
     */
    async unfollowAlert(
        alertId,
    ) {
        // check the alert id
        if(!alertId.startsWith('~')) {
            throw new Error('Invalid alert id, must start with ~')
        }

        return await fetchInstance.post(`/api/v1/alert/${alertId}/unfollow`)
    }

    /**
     * Merge an alert with a case
     * @param {String} alertId - The id of the alert to merge
     * @param {String} caseId - The id of the case to merge
     * @returns {Promise} - A promise which resolves to the response body
     */
    async mergeAlert(
        alertId,
        caseId,
    ) {
        // check the alert id
        if(!alertId.startsWith('~')) {
            throw new Error('Invalid alert id, must start with ~')
        }

        // check the case id
        if(!caseId.startsWith('~')) {
            throw new Error('Invalid case id, must start with ~')
        }

        return await fetchInstance.post(`/api/v1/alert/${alertId}/merge/${caseId}`)
    }

    /**
     * Merge multiple alerts with a case
     * @param {String} caseId - The id of the case to merge
     * @param {Array} alertIds - The ids of the alerts to merge
     * @returns {Promise} - A promise which resolves to the response body
     */
    async mergeAlerts(
        caseId,
        alertIds,
    ) {
        // check the case id
        if(!caseId.startsWith('~')) {
            throw new Error('Invalid case id, must start with ~')
        }

        // check the alert ids
        for(let alertId of alertIds) {
            if(!alertId.startsWith('~')) {
                throw new Error('Invalid alert id, must start with ~')
            }
        }

        return await fetchInstance.post(`/api/v1/alert/merge/_bulk`, {
            caseId: caseId,
            alertIds: alertIds
        })
    }


    /**
     * Delete an alert in bulk
     * @param {Array} alertIds - The ids of the alerts to delete
     * @returns {Promise} - A promise which resolves to the response body
     */
    async deleteAlerts(
        alertIds,
    ) {
        // check the alert ids
        for(let alertId of alertIds) {
            if(!alertId.startsWith('~')) {
                throw new Error('Invalid alert id, must start with ~')
            }
        }

        return await fetchInstance.post(`/api/v1/alert/delete/_bulk`, {
            ids: alertIds
        })
    }

}



module.exports.alert = new Alert()