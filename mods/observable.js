const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the observable API
 */
const Observable = class {
    /**
     * Create a new observable in case
     * @param {string} caseId The id of the case
     * @param {string} dataType The data type of the observable
     * @param {string} data The data of the observable
     * @param {string} message The message of the observable
     * @param {string} startDate The start date of the observable
     * @param {string} attachment The attachment of the observable
     * @param {string} tlp The tlp of the observable
     * @param {string} pap The pap of the observable
     * @param {string} tags The tags of the observable
     * @param {string} ioc The ioc of the observable
     * @param {string} sighted The sighted of the observable
     * @param {string} sightedAt The sighted at of the observable
     * @param {string} ignoreSimilarity The ignore similarity of the observable
     * @param {string} isZip The is zip of the observable ?
     * @param {string} zipPassword The zip password of the observable
     * @returns {Promise} A promise that contains the created observable
     */
    async createCase(
        caseId,
        dataType,
        data = null,
        message = null,
        startDate = null,
        attachment = null,
        tlp = 2,
        pap = 2,
        tags = [],
        ioc = false,
        sighted = false,
        sightedAt = null,
        ignoreSimilarity = false,
        isZip = false,
        zipPassword = null
    ) {
        // check caseId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of 64 characters starting with ~")
        }

        // check message is a string of max 1048576 characters
        if (message && !checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 characters")
        }

        // check tlp is an number between 0 and 4
        if (tlp && !checks.checkNumber(0, 4, tlp)) {
            throw new Error("tlp must be an number between 0 and 4")
        }

        // check pap is an number between 0 and 3
        if (pap && !checks.checkNumber(0, 3, pap)) {
            throw new Error("pap must be an number between 0 and 3")
        }

        // check ioc is a boolean
        if (ioc && !typeof ioc === "boolean") {
            throw new Error("ioc must be a boolean")
        }

        // check tag 
        for(const tag of tags) {
            if (!checks.checkSize(1, 64, tag)) {
                throw new Error("tag must be a string of max 64 characters")
            }
        }

        // check sighted is a boolean
        if (sighted && !typeof sighted === "boolean") {
            throw new Error("sighted must be a boolean")
        }

        // check ignoreSimilarity is a boolean
        if (ignoreSimilarity && !typeof ignoreSimilarity === "boolean") {
            throw new Error("ignoreSimilarity must be a boolean")
        }

        // check isZip is a boolean
        if (isZip && !typeof isZip === "boolean") {
            throw new Error("isZip must be a boolean")
        }

        // check zipPassword is a string of max 64 characters
        if (zipPassword && !checks.checkSize(1, 64, zipPassword)) {
            throw new Error("zipPassword must be a string of max 64 characters")
        }

        return await fetchInstance.post(`/api/v1/case/${caseId}/observable`, {
            dataType: dataType,
            data : data,
            message : message,
            startDate : startDate,
            attachment : attachment,
            tlp : tlp,
            pap : pap,
            tags : tags,
            ioc : ioc,
            sighted : sighted,
            sightedAt : sightedAt,
            ignoreSimilarity : ignoreSimilarity,
            isZip : isZip,
            zipPassword : zipPassword
        })
    }

        /**
     * Create a new observable in alert
     * @param {string} alertId The id of the alert
     * @param {string} dataType The data type of the observable
     * @param {string} data The data of the observable
     * @param {string} message The message of the observable
     * @param {string} startDate The start date of the observable
     * @param {string} attachment The attachment of the observable
     * @param {string} tlp The tlp of the observable
     * @param {string} pap The pap of the observable
     * @param {string} tags The tags of the observable
     * @param {string} ioc The ioc of the observable
     * @param {string} sighted The sighted of the observable
     * @param {string} sightedAt The sighted at of the observable
     * @param {string} ignoreSimilarity The ignore similarity of the observable
     * @param {string} isZip The is zip of the observable ?
     * @param {string} zipPassword The zip password of the observable
     * @returns {Promise} A promise that contains the created observable
     */
    async createAlert(
        alertId,
        dataType,
        data = null,
        message = null,
        startDate = null,
        attachment = null,
        tlp = 2,
        pap = 2,
        tags = [],
        ioc = false,
        sighted = false,
        sightedAt = null,
        ignoreSimilarity = false,
        isZip = false,
        zipPassword = null
    ) {
        // check alertId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, alertId) || !alertId.startsWith("~")) {
            throw new Error("alertId must be a string of 64 characters starting with ~")
        }

        // check message is a string of max 1048576 characters
        if (message && !checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 characters")
        }

        // check tlp is an number between 0 and 4
        if (tlp && !checks.checkNumber(0, 4, tlp)) {
            throw new Error("tlp must be an number between 0 and 4")
        }

        // check pap is an number between 0 and 3
        if (pap && !checks.checkNumber(0, 3, pap)) {
            throw new Error("pap must be an number between 0 and 3")
        }

        // check ioc is a boolean
        if (ioc && !typeof ioc === "boolean") {
            throw new Error("ioc must be a boolean")
        }

        // check tag 
        for(const tag of tags) {
            if (!checks.checkSize(1, 64, tag)) {
                throw new Error("tag must be a string of max 64 characters")
            }
        }

        // check sighted is a boolean
        if (sighted && !typeof sighted === "boolean") {
            throw new Error("sighted must be a boolean")
        }

        // check ignoreSimilarity is a boolean
        if (ignoreSimilarity && !typeof ignoreSimilarity === "boolean") {
            throw new Error("ignoreSimilarity must be a boolean")
        }

        // check isZip is a boolean
        if (isZip && !typeof isZip === "boolean") {
            throw new Error("isZip must be a boolean")
        }

        // check zipPassword is a string of max 64 characters
        if (zipPassword && !checks.checkSize(1, 64, zipPassword)) {
            throw new Error("zipPassword must be a string of max 64 characters")
        }

        return await fetchInstance.post(`/api/v1/alert/${alertId}/observable`, {
            dataType: dataType,
            data : data,
            message : message,
            startDate : startDate,
            attachment : attachment,
            tlp : tlp,
            pap : pap,
            tags : tags,
            ioc : ioc,
            sighted : sighted,
            sightedAt : sightedAt,
            ignoreSimilarity : ignoreSimilarity,
            isZip : isZip,
            zipPassword : zipPassword
        })
    }

    /**
     * Get observable by id
     * @param {string} observableId The id of the observable
     * @returns {Promise} A promise that contains the observable
     */
    async getById(observableId) {
        // check observableId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
            throw new Error("observableId must be a string of 64 characters starting with ~")
        }

        return await fetchInstance.get(`/api/v1/observable/${observableId}`)
    }

    /**
     * Delete observable by id
     * @param {string} observableId The id of the observable
     * @returns {Promise} A promise that contains the deleted observable
     */
    async deleteById(observableId) {
        // check observableId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
            throw new Error("observableId must be a string of 64 characters starting with ~")
        }

        return await fetchInstance.delete(`/api/v1/observable/${observableId}`)
    }

    /**
     * Update observable by id
     * @param {string} observableId The id of the observable
     * @param {string} dataType The data type of the observable
     * @param {string} message The message of the observable
     * @param {string} tlp The tlp of the observable
     * @param {string} pap The pap of the observable
     * @param {string} tags The tags of the observable
     * @param {string} ioc The ioc of the observable
     * @param {string} sighted The sighted of the observable
     * @param {string} sightedAt The sighted at of the observable
     * @param {string} ignoreSimilarity The ignore similarity of the observable
     * @param {string} addTag The tag to add to the observable
     * @param {string} removeTag The tag to remove from the observable
     * @returns {Promise} A promise that contains the updated observable
     */
    async updateById(
        observableId,
        dataType = null,
        message = null,
        tlp = null,
        pap = null,
        tags = null,
        ioc = null,
        sighted = null,
        sightedAt = null,
        ignoreSimilarity = null,
        addTag = [],
        removeTag = []
    ) {
        // check observableId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
            throw new Error("observableId must be a string of 64 characters starting with ~")
        }

        // check message is a string of max 1048576 characters
        if (message && !checks.checkSize(1, 1048576, message)) {
            throw new Error("message must be a string of max 1048576 characters")
        }

        // check tlp is an number between 0 and 4
        if (tlp && !checks.checkNumber(0, 4, tlp)) {
            throw new Error("tlp must be an number between 0 and 4")
        }

        // check pap is an number between 0 and 3
        if (pap && !checks.checkNumber(0, 3, pap)) {
            throw new Error("pap must be an number between 0 and 3")
        }

        // check ioc is a boolean
        if (ioc && !typeof ioc === "boolean") {
            throw new Error("ioc must be a boolean")
        }

        // check tag 
        for(const tag of addTag) {
            if (!checks.checkSize(1, 64, tag)) {
                throw new Error("tag must be a string of max 64 characters")
            }
        }

        // check tag 
        for(const tag of removeTag) {
            if (!checks.checkSize(1, 64, tag)) {
                throw new Error("tag must be a string of max 64 characters")
            }
        }

        // check sighted is a boolean
        if (sighted && !typeof sighted === "boolean") {
            throw new Error("sighted must be a boolean")
        }

        // check ignoreSimilarity is a boolean
        if (ignoreSimilarity && !typeof ignoreSimilarity === "boolean") {
            throw new Error("ignoreSimilarity must be a boolean")
        }

        return await fetchInstance.put(`/api/v1/observable/${observableId}`, {
            dataType : dataType,
            message : message,
            tlp : tlp,
            pap : pap,
            tags : tags,
            ioc : ioc,
            sighted : sighted,
            sightedAt: sightedAt,
            ignoreSimilarity : ignoreSimilarity,
            addTag : addTag,
            removeTag : removeTag
        })
    }

    /**
     * Update bulk observable by ids
     * @param {string} observableIds The ids of the observables
     * @param {string} dataType The data type of the observable
     * @param {string} message The message of the observable
     * @param {string} tlp The tlp of the observable
     * @param {string} pap The pap of the observable
     * @param {string} tags The tags of the observable
     * @param {string} ioc The ioc of the observable
     * @param {string} sighted The sighted of the observable
     * @param {string} sightedAt The sighted at of the observable
     * @param {string} ignoreSimilarity The ignore similarity of the observable
     * @param {string} addTag The tag to add to the observable
     * @param {string} removeTag The tag to remove from the observable
     * @returns {Promise} A promise that contains the updated observable
     */
    async updateById(
        observableId,
        dataType = null,
        message = null,
        tlp = null,
        pap = null,
        tags = null,
        ioc = null,
        sighted = null,
        sightedAt = null,
        ignoreSimilarity = null,
        addTag = [],
        removeTag = []
    ) {
        // check all observableIds are a string of 64 characters starting with "~"
        for(const observableId of observableIds) {
            if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
                throw new Error("observableId must be a string of 64 characters starting with ~")
            }
        }

        let stack = []
        for(const observable of observables) {
            const r = await this.updateById(
                observable,
                dataType,
                message,
                tlp,
                pap,
                tags,
                ioc,
                sighted,
                sightedAt,
                ignoreSimilarity,
                addTag,
                removeTag
            )
            stack.push(r)
        }

        return stack
    }

    /**
     * Download attachment from observable
     * @param {string} observableId The id of the observable
     * @param {string} attachmentId The id of the attachment
     * @returns {Promise} A promise that contains the attachment
     */
    async downloadAttachment(
        observableId, 
        attachmentId
    ) {
        // check observableId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
            throw new Error("observableId must be a string of 64 characters starting with ~")
        }

        // check attachmentId is a string of 64 characters starting with "~"
        if(!checks.checkSize(1, 64, attachmentId) || !attachmentId.startsWith("~")) {
            throw new Error("attachmentId must be a string of 64 characters starting with ~")
        }

        return await fetchInstance.get(`/api/v1/observable/${observableId}/attachment/${attachmentId}/download`)
    }

    /**
     * List share of observable
     * @param {string} observableId The id of the observable
     * @returns {Promise} A promise that contains the list of shares
     */
    async listShare(
        observableId
    ) {
        // check observableId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
            throw new Error("observableId must be a string of 64 characters starting with ~")
        }

        return await fetchInstance.get(`/api/v1/observable/${observableId}/shares`)
    }

    /**
     * Share an observable
     * @param {string} observableId The id of the observable
     * @param {string[]} organisationsId The id of the organisations
     * @returns {Promise} A promise that contains the list of shares
     */
    async share(
        observableId,
        organisationsId
    ) {
        // check observableId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
            throw new Error("observableId must be a string of 64 characters starting with ~")
        }

        // check all organisationsId are a string of 64 characters starting with "~"
        for(const organisationId of organisationsId) {
            if (!checks.checkSize(1, 64, organisationId) || !organisationId.startsWith("~")) {
                throw new Error("organisationId must be a string of 64 characters starting with ~")
            }
        }

        return await fetchInstance.post(`/api/v1/observable/${observableId}/shares`, {
            organisations : organisationsId
        })
    }

    /**
     * Unshare an observable
     * @param {string} observableId The id of the observable
     * @param {string[]} organisationsId The id of the organisations
     * @returns {Promise} A promise that contains the list of shares
     */
    async unshare(
        observableId,
        organisationsId
    ) {
        // check observableId is a string of 64 characters starting with "~"
        if (!checks.checkSize(1, 64, observableId) || !observableId.startsWith("~")) {
            throw new Error("observableId must be a string of 64 characters starting with ~")
        }

        // check all organisationsId are a string of 64 characters starting with "~"
        for(const organisationId of organisationsId) {
            if (!checks.checkSize(1, 64, organisationId) || !organisationId.startsWith("~")) {
                throw new Error("organisationId must be a string of 64 characters starting with ~")
            }
        }

        return await fetchInstance.delete(`/api/v1/observable/${observableId}/shares`, {
            organisations : organisationsId
        })
    }
}

module.exports.observable = new Observable()