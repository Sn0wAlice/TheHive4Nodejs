const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the case API
 */
const Case = class {
    /**
     * This function is used to create a new case
     * @param {string} title The title of the case
     * @param {string} description The description of the case
     * @param {number} severity The severity of the case
     * @param {number} startDate The start date of the case
     * @param {number} endDate The end date of the case
     * @param {string[]} tags The tags of the case
     * @param {boolean} flag The flag of the case
     * @param {number} tlp The tlp of the case
     * @param {number} pap The pap of the case
     * @param {string} status The status of the case
     * @param {string} summary The summary of the case
     * @param {string} assignee The assignee of the case
     * @param {object[]} customFields The custom fields of the case
     * @param {string} caseTemplate The case template of the case
     * @param {object[]} tasks The tasks of the case
     * @param {object[]} pages The pages of the case
     * @param {object[]} sharingParameters The sharing parameters of the case
     * @param {string} taskRule The task rule of the case
     * @param {string} observableRule The observable rule of the case
     * @returns {Promise<object>} The response of the request
     */
    async create(
        title, 
        description,
        severity = 2,
        startDate = Date.now(),
        endDate = null,
        tags = [],
        flag = false,
        tlp = 2,
        pap = 2,
        status = "New",
        summary = "",
        assignee = "",
        customFields = [],
        caseTemplate = "",
        tasks = [],
        pages = [],
        sharingParameters = [],
        taskRule = "",
        observableRule = "",
    ) {

        // Step 1 check all the parameters
        if (!checks.checkSize(1, 512, title)) {
            throw new Error("Title is not valid, must be between 1 and 512 characters")
        }

        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("Description is not valid, must be between 1 and 1048576 characters")
        }

        if (!checks.checkNumber(1, 4, severity)) {
            throw new Error("Severity is not valid, must be between 1 and 4")
        }

        for(let tag of tags) {
            if (!checks.checkSize(1, 128, tag)) {
                throw new Error(`Tag '${tag}' is not valid, must be between 1 and 128 characters`)
            }
        }

        if (!checks.checkNumber(0, 4, tlp)) {
            throw new Error("TLP is not valid, must be between 0 and 4")
        }

        if (!checks.checkNumber(0, 3, pap)) {
            throw new Error("PAP is not valid, must be between 0 and 3")
        }

        if (!checks.checkSize(0, 64, status)) {
            throw new Error("Status is not valid, must be between 0 and 64 characters")
        }

        if (!checks.checkSize(0, 1048576, summary)) {
            throw new Error("Summary is not valid, must be between 0 and 1048576 characters")
        }

        if (!checks.checkSize(0, 128, assignee)) {
            throw new Error("Assignee is not valid, must be between 0 and 128 characters")
        }

        if (!checks.checkSize(0, 128, taskRule)) {
            throw new Error("taskRule is not valid, must be between 0 and 128 characters")
        }

        if (!checks.checkSize(0, 128, observableRule)) {
            throw new Error("observableRule is not valid, must be between 0 and 128 characters")
        }

        // Step 2 build the body
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
            assignee: assignee.length > 0 ? assignee : undefined,
            customFields: customFields,
            caseTemplate: caseTemplate.length > 0 ? caseTemplate : undefined,
            tasks: tasks,
            pages: pages,
            sharingParameters: sharingParameters,
            taskRule: taskRule.length > 0 ? taskRule : undefined,
            observableRule: observableRule.length > 0 ? observableRule : undefined,
        }

        // Step 3 send the request
        return await fetchInstance.post('/api/v1/case', body)
    }

    /**
     * This function is used to get a case
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response of the request
     */
    async get(id) {
        // Step 1 check if the id is valid
        if(!id.startsWith("~")) {
            throw new Error("Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${id}`)
    }

    /**
     * This function is used to delete a case
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response of the request
     */
    async delete(id) {
        // Step 1 check if the id is valid
        if(!id.startsWith("~")) {
            throw new Error("Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.delete(`/api/v1/case/${id}`)
    }

    /**
     * This function is used to update a case
     * @param {string} id The id of the case
     * @param {string} title The title of the case
     * @param {string} description The description of the case
     * @param {number} severity The severity of the case
     * @param {number} startDate The start date of the case
     * @param {number} endDate The end date of the case 
     * @param {string[]} tags The tags of the case
     * @param {boolean} flag The flag of the case
     * @param {number} tlp The tlp of the case
     * @param {number} pap The pap of the case
     * @param {string} status The status of the case
     * @param {string} summary The summary of the case
     * @param {string} assignee The assignee of the case
     * @param {string} impactStatus The impact status of the case
     * @param {object[]} customFields The custom fields of the case
     * @param {string} taskRule The task rule of the case
     * @param {string} observableRule The observable rule of the case
     * @param {string[]} addTags The tags to add to the case
     * @param {string[]} removeTags The tags to remove from the case
     * @returns {Promise<object>} The response of the request
     */
    async update(
        id,
        title = "", 
        description = "",
        severity = 2,
        startDate = Date.now(),
        endDate = null,
        tags = [],
        flag = false,
        tlp = 2,
        pap = 2,
        status = "New",
        summary = "",
        assignee = "",
        impactStatus = "",        
        customFields = [],
        taskRule = "",
        observableRule = "",
        addTags = [],
        removeTags = [],
    ) {
        // Step 0 check if the id is valid
        if(!id.startsWith("~")) {
            throw new Error("Id is not valid, must start with ~")
        }

        // Step 1 check all the parameters
        if (!checks.checkSize(1, 512, title)) {
            throw new Error("Title is not valid, must be between 1 and 512 characters")
        }

        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("Description is not valid, must be between 1 and 1048576 characters")
        }

        if (!checks.checkNumber(1, 4, severity)) {
            throw new Error("Severity is not valid, must be between 1 and 4")
        }

        for(let tag of tags) {
            if (!checks.checkSize(1, 128, tag)) {
                throw new Error(`Tag '${tag}' is not valid, must be between 1 and 128 characters`)
            }
        }

        if (!checks.checkNumber(0, 4, tlp)) {
            throw new Error("TLP is not valid, must be between 0 and 4")
        }

        if (!checks.checkNumber(0, 3, pap)) {
            throw new Error("PAP is not valid, must be between 0 and 3")
        }

        if (!checks.checkSize(0, 64, status)) {
            throw new Error("Status is not valid, must be between 0 and 64 characters")
        }

        if (!checks.checkSize(0, 1048576, summary)) {
            throw new Error("Summary is not valid, must be between 0 and 1048576 characters")
        }

        if (!checks.checkSize(0, 128, assignee)) {
            throw new Error("Assignee is not valid, must be between 0 and 128 characters")
        }

        if (!checks.checkSize(0, 128, taskRule)) {
            throw new Error("taskRule is not valid, must be between 0 and 128 characters")
        }

        if (!checks.checkSize(0, 128, observableRule)) {
            throw new Error("observableRule is not valid, must be between 0 and 128 characters")
        }

        if (!checks.checkSize(0, 128, impactStatus)) {
            throw new Error("impactStatus is not valid, must be between 0 and 128 characters")
        }

        for(let tag of addTags) {
            if (!checks.checkSize(1, 128, tag)) {
                throw new Error(`Tag '${tag}' is not valid, must be between 1 and 128 characters`)
            }
        }

        for(let tag of removeTags) {
            if (!checks.checkSize(1, 128, tag)) {
                throw new Error(`Tag '${tag}' is not valid, must be between 1 and 128 characters`)
            }
        }

        // Step 2 build the body
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
            summary: summary.length > 0 ? summary : undefined,
            assignee: assignee.length > 0 ? assignee : undefined,
            impactStatus: impactStatus.length > 0 ? impactStatus : undefined,
            customFields: customFields,
            taskRule: taskRule.length > 0 ? taskRule : undefined,
            observableRule: observableRule.length > 0 ? observableRule : undefined,
            addTags: addTags,
            removeTags: removeTags,
        }

        // Step 3 send the request
        return await fetchInstance.patch(`/api/v1/case/${id}`, body)
    }

    /**
     * Bulk update cases
     * @param {string[]} ids The ids of the cases to update
     * @param {string} title The title of the case
     * @param {string} description The description of the case
     * @param {number} severity The severity of the case
     * @param {number} startDate The start date of the case
     * @param {number} endDate The end date of the case
     * @param {string[]} tags The tags of the case
     * @param {boolean} flag The flag of the case
     * @param {number} tlp The tlp of the case
     * @param {number} pap The pap of the case
     * @param {string} status The status of the case
     * @param {string} summary The summary of the case
     * @param {string} assignee The assignee of the case
     * @param {string} impactStatus The impact status of the case
     * @param {object[]} customFields The custom fields of the case
     * @param {string} taskRule The task rule of the case
     * @param {string} observableRule The observable rule of the case
     * @param {string[]} addTags The tags to add to the case
     * @param {string[]} removeTags The tags to remove from the case
     * @returns {Promise<object>} The response body
     */
    async bulkUpdate(
        ids,
        title = "", 
        description = "",
        severity = 2,
        startDate = Date.now(),
        endDate = null,
        tags = [],
        flag = false,
        tlp = 2,
        pap = 2,
        status = "New",
        summary = "",
        assignee = "",
        impactStatus = "",        
        customFields = [],
        taskRule = "",
        observableRule = "",
        addTags = [],
        removeTags = [],
    ) {
        for(let id of ids) {
            // Step 0 check if the id is valid
            if(!id.startsWith("~")) {
                throw new Error("Id is not valid, must start with ~")
            }
        }

        let stack = []

        // update all the cases
        for(let id of ids) {
            const r = await this.update(
                id,
                title,
                description,
                severity,
                startDate,
                endDate,
                tags,
                flag,
                tlp,
                pap,
                status,
                summary,
                assignee,
                impactStatus,
                customFields,
                taskRule,
                observableRule,
                addTags,
                removeTags,
            )

            stack.push(r)
        }

        return stack
    }

    /**
     * merge cases
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response body
     */
    async merge(
        ids
    ) {
        // Step 1 check if the id is valid
        for(let id of ids) {
            if(!id.startsWith("~")) {
                throw new Error("Id is not valid, must start with ~")
            }
        }

        // Step 2 send the request
        return await fetchInstance.post(`/api/v1/case/_merge/${ids.join(",")}`)
    }

    /**
     * unlink an alert from a case
     * @param {string} id The id of the case
     * @param {string} alertId The id of the alert
     * @returns {Promise<object>} The response body
     */
    async unlinkAlert(
        caseId,
        alertId
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 check if the id is valid
        if(!alertId.startsWith("~")) {
            throw new Error("Alert Id is not valid, must start with ~")
        }

        // Step 3 send the request
        return await fetchInstance.delete(`/api/v1/case/${caseId}/alert/${alertId}`)
    }

    /**
     * merge similar observables in a case
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response body
     */
    async mergeSimilarObservables(
        caseId,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.post(`/api/v1/case/${caseId}/observable/_merge`)
    }

    /** 
     * get the linked cases of a case
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response body
     */
    async getLinkedCases(
        caseId,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${caseId}/links`)
    }

    /**
     * delete a custom field
     * @param {string} id The id of the custom field
     * @returns {Promise<object>} The response body
     */
    async deleteCustomField(
        cfId
    ) {
        // Step 1 check if the id is valid
        if(!cfId.startsWith("~")) {
            throw new Error("Custom Field Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.delete(`/api/v1/case/customField/${cfId}`)
    }

    /**
     * import a new case from a file
     * @param {string} _jsonFile The json file of the case
     * @param {string} file The file of the case
     */
    async importCaseFromFile(
        _jsonFile,
        file
    ) {
        // Step 1 check if the file is valid
        if(!file) {
            throw new Error("File is not valid")
        }

        // Step 2 send the request
        return await fetchInstance.post(`/api/v1/case/import`, {
            _json: _jsonFile,
            file: file
        })
    }

    /**
     * export a case as an archive
     * @param {string} id The id of the case
     * @param {string} archivePassword The password of the archive (default: alice)
     */
    async exportCaseAsArchive(
        caseId,
        archivePassword = "alice"
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${caseId}/export`, {
            password: archivePassword
        })
    }

    /**
     * apply a case template on an existing case
     * @param {string} id The id of the case
     * @param {string} caseTemplate The case template
     * @param {boolean} updateTitlePrefix Update the title prefix
     * @param {boolean} updateDescription Update the description
     * @param {boolean} updateTags Update the tags
     * @param {boolean} updateSeverity Update the severity
     * @param {boolean} updateFlag Update the flag
     * @param {boolean} updateTlp Update the tlp
     * @param {boolean} updatePap Update the pap
     * @param {boolean} updateCustomFields Update the custom fields
     * @param {boolean} importTasks Import the tasks
     * @param {boolean} importPages Import the pages
     * @returns {Promise<object>} The response body
     */
    async ApplyCaseTemplateOnExistingCase(
        ids,
        caseTemplate,
        updateTitlePrefix = false,
        updateDescription = false,
        updateTags = false,
        updateSeverity = false,
        updateFlag = false,
        updateTlp = false,
        updatePap = false,
        updateCustomFields = false,
        importTasks = false,
        importPages = false,
    ) {
        // Step 1 check if the id is valid
        for(let id of ids) {
            if(!id.startsWith("~")) {
                throw new Error("Id is not valid, must start with ~")
            }
        }

        // Step 2 build the body
        let body = {
            ids: ids,
            caseTemplate: caseTemplate,
            updateTitlePrefix: updateTitlePrefix,
            updateDescription: updateDescription,
            updateTags: updateTags,
            updateSeverity: updateSeverity,
            updateFlag: updateFlag,
            updateTlp: updateTlp,
            updatePap: updatePap,
            updateCustomFields: updateCustomFields,
            importTasks: importTasks,
            importPages: importPages,
        }


        // Step 3 send the request
        return await fetchInstance.post(`/api/v1/case/_bulk/caseTemplate`, body)
    }

    /**
     * change the owning org of a case
     * @param {string} id The id of the case
     * @param {string} organisation The organisation
     * @param {string} keepProfile Keep the profile
     * @param {string} taskRule The task rule
     * @param {string} observableRule The observable rule
     * @returns {Promise<object>} The response body
     */
    async changeCaseOwningOrg(
        caseId,
        organisation,
        keepProfile = null,
        taskRule = null,
        observableRule = null,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 build the body
        let body = {
            organisation: organisation,
            keepProfile: keepProfile,
            taskRule: taskRule,
            observableRule: observableRule,
        }

        // Step 3 send the request
        return await fetchInstance.post(`/api/v1/case/${caseId}/owner`, body)
    }

    /**
     * get the timeline of a case
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response body
     */
    async getCaseTimeline(
        caseId,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${caseId}/timeline`)
    }

    /**
     * add new attachments to a case
     * @param {string} id The id of the case
     * @param {any[]} attachments The attachments to add
     * @param {boolean} canRename Can rename (if the attachment already exists)
     */
    async addAttachmentToCase(
        caseId,
        attachments,
        canRename = false,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 build the body
        let body = {
            attachments: attachments,
            canRename: canRename,
        }

        // Step 3 send the request
        return await fetchInstance.post(`/api/v1/case/${caseId}/attachments`, body)
    }

    /**
     * get an attachment from a case
     * @param {string} id The id of the case
     * @param {string} attachmentId The id of the attachment
     * @returns {Promise<object>} The response body
     */
    async downloadAttachment(
        caseId,
        attachmentId,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        if(!attachmentId.startsWith("~")) {
            throw new Error("Attachment Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${caseId}/attachment/${attachmentId}`)
    }

    /**
     * get an attachment from a case
     * @param {string} id The id of the case
     * @param {string} attachmentId The id of the attachment
     * @returns {Promise<object>} The response body
     */
    async getAttachmentFromCase(
        caseId,
        attachmentId,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        if(!attachmentId.startsWith("~")) {
            throw new Error("Attachment Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${caseId}/attachment/${attachmentId}`)
    }

    /**
     * delete an attachment from a case
     * @param {string} id The id of the case
     * @param {string} attachmentId The id of the attachment
     * @returns {Promise<object>} The response body
     */
    async deleteAttachmentFromCase(
        caseId,
        attachmentId,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        if(!attachmentId.startsWith("~")) {
            throw new Error("Attachment Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.delete(`/api/v1/case/${caseId}/attachment/${attachmentId}`)
    }

    /**
     * get the shares of a case
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response body
     */
    async listSharesOfCase(
        caseId,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${caseId}/shares`)
    }
    
    /**
     * set the shares of a case
     * @param {string} id The id of the case
     * @param {object[]} shares The shares
     * @returns {Promise<object>} The response body
     */
    async setSharesOfCase(
        caseId,
        shares,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }
        
        // Step 2 build the body
        let body = {
            shares: shares,
        }

        // Step 3 send the request
        return await fetchInstance.put(`/api/v1/case/${caseId}/shares`, body)
    }

    /**
     * share a case
     * @param {string} id The id of the case
     * @param {object[]} shares The shares
     * @returns {Promise<object>} The response body
     */
    async shareACase(
        caseId,
        shares,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }
        
        // Step 2 build the body
        let body = {
            shares: shares,
        }

        // Step 3 send the request
        return await fetchInstance.post(`/api/v1/case/${caseId}/shares`, body)
    }

    /**
     * unshare a case
     * @param {string} id The id of the case
     * @param {object[]} shares The shares
     * @returns {Promise<object>} The response body
     */
    async unshareACase(
        caseId,
        organisations,
    ) {
        // Step 1 check if the id is valid
        if(!caseId.startsWith("~")) {
            throw new Error("Case Id is not valid, must start with ~")
        }
        
        // Step 2 build the body
        let body = {
            organisations: organisations,
        }

        // Step 3 send the request
        return await fetchInstance.delete(`/api/v1/case/${caseId}/shares`, body)
    }

    /**
     * get the shares of a case
     * @param {string} id The id of the case
     * @returns {Promise<object>} The response body
     */
    async removeShareFromCase(
        shareId,
    ) {
        // Step 1 check if the id is valid
        if(!shareId.startsWith("~")) {
            throw new Error("Share Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.delete(`/api/v1/case/share/${shareId}`)
    }
}

module.exports.case = new Case()