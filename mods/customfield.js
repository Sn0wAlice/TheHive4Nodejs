const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the customfield API
 */
const Customfield = class {
    /**
     * List all customfields
     * @returns {Promise} A promise that contains the list of customfields
     */
    async list() {
        return await fetchInstance.get("/api/v1/customField")
    }

    /**
     * Create a new customfield
     * @param {string} name The name of the customfield
     * @param {string} displayName The display name of the customfield
     * @param {string} group The group of the customfield
     * @param {string} description The description of the customfield
     * @param {string} type The type of the customfield
     * @param {string} mandatory The mandatory of the customfield
     * @param {string} options The options of the customfield
     * @returns {Promise} A promise that contains the created customfield
     */
    async create(
        name,
        displayName,
        group,
        description,
        type,
        mandatory = false,
        options = []
    ) {
        // check name is a string of max 64 chars
        if (!checks.checkSize(1, 64, name)) {
            throw new Error("name must be a string of max 64 chars")
        }

        // check displayName is a string of max 64 chars
        if (!checks.checkSize(1, 64, displayName)) {
            throw new Error("displayName must be a string of max 64 chars")
        }

        // check group is a string of max 64 chars
        if (!checks.checkSize(1, 64, group)) {
            throw new Error("group must be a string of max 64 chars")
        }

        // check description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        // check type is allowed
        if(!["string", "integer", "float", "boolean", "date", "url"].includes(type)) {
            throw new Error("type must be one of string, integer, float, boolean, date, url")
        }

        // check mandatory is a boolean
        if (!typeof mandatory === "boolean") {
            throw new Error("mandatory must be a boolean")
        }

        return await fetchInstance.post( "/api/v1/customField",{
                name: name,
                displayName: displayName,
                group: group,
                description: description,
                type: type,
                mandatory: mandatory,
                options: options
            }
        )
    }

    /**
     * Delete a customfield
     * @param {string} id The id of the customfield
     * @returns {Promise} A promise that contains the deleted customfield
     */
    async delete(id) {
        // check id is a string of max 64 chars
        if (!checks.checkSize(1, 64, id)) {
            throw new Error("id must be a string of max 64 chars")
        }

        return await fetchInstance.delete(`/api/v1/customField/${id}`)
    }

    /**
     * Update a customfield
     * @param {string} id The id of the customfield
     * @param {string} displayName The display name of the customfield
     * @param {string} description The description of the customfield
     * @param {string} type The type of the customfield
     * @param {string} options The options of the customfield
     * @param {string} mandatory The mandatory of the customfield
     * @returns {Promise} A promise that contains the updated customfield
     */
    async update(
        id,
        displayName = null,
        description = null,
        type = null,
        options = [],
        mandatory = false
    ) {
        // check id is a string that start with ~
        if (!checks.checkStartsWith("~", id)) {
            throw new Error("id must be a string that start with ~")
        }

        // check displayName is a string of max 64 chars
        if(displayName && !checks.checkSize(1, 64, displayName)) {
            throw new Error("displayName must be a string of max 64 chars")
        }

        // check description is a string of max 1048576 chars
        if(description && !checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        // check type is allowed
        if(type && !["string", "integer", "float", "boolean", "date", "url"].includes(type)) {
            throw new Error("type must be one of string, integer, float, boolean, date, url")
        }

        // check mandatory is a boolean
        if(mandatory && !typeof mandatory === "boolean") {
            throw new Error("mandatory must be a boolean")
        }

        return await fetchInstance.patch(`/api/v1/customField/${id}`, {
            displayName: displayName,
            description: description,
            type: type,
            options: options,
            mandatory: mandatory
        })
    }

}

module.exports.customfield = new Customfield()