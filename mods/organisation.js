const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Organisation API
 */
const Organisation = class {
    /**
     * Add attachment to organisation
     * @param {string[]} attachments The attachment to add
     * @param {boolean} canRename The canRename of the attachment
     * @returns {Promise} A promise that contains the added attachment
     */
    async addAttachment(
        attachments,
        canRename = false
    ) {
        // canRename is a boolean
        if (!checks.checkBoolean(canRename)) {
            throw new Error("canRename must be a boolean")
        }

        return await fetchInstance.post( "/api/v1/attachment",{
                attachments: attachments,
                canRename: canRename
            }
        )
    }

    /**
     * Get attachment by id
     * @param {string} id The id of the attachment
     * @returns {Promise} A promise that contains the attachment
     */
    async getAttachment(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.get(`/api/v1/attachment/${id}`)
    }

    /**
     * Delete attachment by id
     * @param {string} id The id of the attachment
     * @returns {Promise} A promise that contains the deleted attachment
     */
    async deleteAttachment(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/attachment/${id}`)
    }

    /**
     * Create organisation
     * @param {string} name The name of the organisation
     * @param {string} description The description of the organisation
     * @param {string} taskRule The taskRule of the organisation
     * @param {string} observableRule The observableRule of the organisation
     * @param {boolean} locked The locked stauts of the organisation
     * @returns {Promise} A promise that contains the created organisation
     */
    async create(
        name,
        description,
        taskRule = null,
        observableRule = null,
        locked = false
    ) {
        // check name is a string of max 64 chars
        if (!checks.checkSize(1, 64, name)) {
            throw new Error("name must be a string of max 64 chars")
        }

        // check description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        // check taskRule is a string of max 64 chars
        if (taskRule !== null && !checks.checkSize(1, 64, taskRule)) {
            throw new Error("taskRule must be a string of max 64 chars")
        }

        // check observableRule is a string of max 64 chars
        if (observableRule !== null && !checks.checkSize(1, 64, observableRule)) {
            throw new Error("observableRule must be a string of max 64 chars")
        }

        // check locked is a boolean
        if (!typeof locked === "boolean") {
            throw new Error("locked must be a boolean")
        }

        return await fetchInstance.post( "/api/v1/organisation",{
                name: name,
                description: description,
                taskRule: taskRule,
                observableRule: observableRule,
                locked: locked
            }
        )
    }

    /**
     * Get organisation by id
     * @param {string} id The id of the organisation
     * @returns {Promise} A promise that contains the organisation
     */
    async get(id) {
        // id is a string of max 64 chars
        if (!checks.checkSize(1, 64, id)) {
            throw new Error("id must be a string of max 64 chars")
        }

        return await fetchInstance.get(`/api/v1/organisation/${id}`)
    }

    /**
     * Update organisation by id
     * @param {string} id The id of the organisation
     * @param {string} name The name of the organisation
     * @param {string} description The description of the organisation
     * @param {string} taskRule The taskRule of the organisation
     * @param {string} observableRule The observableRule of the organisation
     * @param {boolean} locked The locked stauts of the organisation
     * @param {string} avatar The avatar of the organisation
     * @returns {Promise} A promise that contains the updated organisation
     */
    async update(
        id,
        name,
        description,
        taskRule = null,
        observableRule = null,
        locked = false,
        avatar = null
    ) {
        // check id is a string of max 64 chars
        if (!checks.checkSize(1, 64, id)) {
            throw new Error("id must be a string of max 64 chars")
        }

        // check name is a string of max 64 chars
        if (!checks.checkSize(1, 64, name)) {
            throw new Error("name must be a string of max 64 chars")
        }

        // check description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        // check taskRule is a string of max 64 chars
        if (taskRule !== null && !checks.checkSize(1, 64, taskRule)) {
            throw new Error("taskRule must be a string of max 64 chars")
        }

        // check observableRule is a string of max 64 chars
        if (observableRule !== null && !checks.checkSize(1, 64, observableRule)) {
            throw new Error("observableRule must be a string of max 64 chars")
        }

        // check locked is a boolean
        if (!typeof locked === "boolean") {
            throw new Error("locked must be a boolean")
        }

        // check avatar is a string of max 64 chars
        if (avatar !== null && !checks.checkSize(1, 64, avatar)) {
            throw new Error("avatar must be a string of max 64 chars")
        }

        return await fetchInstance.patch( `/api/v1/organisation/${id}`,{
                name: name,
                description: description,
                taskRule: taskRule,
                observableRule: observableRule,
                locked: locked,
                avatar: avatar
            }
        )
    }

    /**
     * Get organisation avatar by id
     * @param {string} id The id of the organisation
     * @param {string} fileHash The fileHash of the avatar
     * @returns {Promise} A promise that contains the avatar
     */
    async getAvatar(
        id, 
        fileHash
    ) {
        // id is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars")
        }

        // fileHash is a string of max 64 chars
        if (!checks.checkSize(1, 512, fileHash)) {
            throw new Error("fileHash must be a string of max 64 chars")
        }

        return await fetchInstance.get(`/api/v1/organisation/${id}/avatar/${fileHash}`)
    }

    /**
     * Link organisations
     * @param {string} id The id of the organisation
     * @param {string} organisationId The id of the organisation to link
     * @returns {Promise} A promise that contains the linked organisation
     */
    async link(
        id,
        organisationId
    ) {
        // check id is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars")
        }

        // check organisationId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, organisationId) || !organisationId.startsWith("~")) {
            throw new Error("organisationId must be a string of max 64 chars")
        }

        return await fetchInstance.post(`/api/v1/organisation/${id}/link/${organisationId}`)
    }

    /**
     * Unlink organisations
     * @param {string} id The id of the organisation
     * @param {string} organisationId The id of the organisation to unlink
     * @returns {Promise} A promise that contains the unlinked organisation
     */
    async unlink(
        id,
        organisationId
    ) {
        // check id is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars")
        }

        // check organisationId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, organisationId) || !organisationId.startsWith("~")) {
            throw new Error("organisationId must be a string of max 64 chars")
        }

        return await fetchInstance.delete(`/api/v1/organisation/${id}/link/${organisationId}`)
    }

    /**
     * List organisation link
     * @param {string} id The id of the organisation
     * @returns {Promise} A promise that contains the linked organisations
     */
    async listLink(
        id
    ) {
        // check id is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars")
        }

        return await fetchInstance.get(`/api/v1/organisation/${id}/links`)
    }

    /**
     * bulk link organisations
     * @param {string} id The id of the organisation
     * @param {string[]} organisationIds The ids of the organisations to link
     * @returns {Promise} A promise that contains the linked organisations
     */
    async bulkLink(
        id,
        organisationIds
    ) {
        // check id is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars")
        }

        // check organisationIds is an array of strings of max 64 chars and starts with "~"
        for(const o of organisationIds) {
            if (!checks.checkSize(1, 64, o) || !o.startsWith("~")) {
                throw new Error("organisationIds must be an array of strings of max 64 chars")
            }
        }

        return await fetchInstance.put(`/api/v1/organisation/${id}/links`, {
            links: organisationIds
        })
    }

    /**
     * list sharing profiles
     * @returns {Promise} A promise that contains the sharing profiles
     */
    async listSharingProfiles() {
        return await fetchInstance.get(`/api/v1/sharingProfile`)
    }
}

module.exports.organisation = new Organisation()