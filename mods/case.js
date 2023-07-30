const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

const classCase = class {
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

    async get(id) {
        // Step 1 check if the id is valid
        if(!id.startsWith("~")) {
            throw new Error("Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.get(`/api/v1/case/${id}`)
    }

    async delete(id) {
        // Step 1 check if the id is valid
        if(!id.startsWith("~")) {
            throw new Error("Id is not valid, must start with ~")
        }

        // Step 2 send the request
        return await fetchInstance.delete(`/api/v1/case/${id}`)
    }

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

module.exports.case = new classCase()