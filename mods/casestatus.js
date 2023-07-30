const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the casestatus API
 */
const Casestatus = class {
    /**
     * Create a new casestatus
     * @param {string} value The value of the casestatus
     * @param {string} stage The stage of the casestatus
     * @param {string} order The order of the casestatus
     * @param {string} description The description of the casestatus
     * @param {string} colour The color of the casestatus
     * @returns {Promise} A promise that contains the created casestatus
     */
    async create(
        value,
        stage,
        order = 0,
        description = null,
        colour = "#F1A5E7"
    ) {
        // check value is a string of max 64 chars
        if (!checks.checkSize(1, 64, value)) {
            throw new Error("value must be a string of max 64 chars")
        }

        // check stage is allowed
        if(!["New", "InProgress", "Closed"].includes(stage)) {
            throw new Error("stage must be one of New, InProgress, Closed")
        }

        // check order is a number of max 999999
        if (!checks.checkSize(1, 999999, order)) {
            throw new Error("order must be a number of max 999999")
        }

        // check description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        // check colour is a string of max 7 chars
        if (!checks.checkSize(1, 7, colour)) {
            throw new Error("colour must be a string of max 7 chars")
        }

        return await fetchInstance.post( "/api/v1/caseStatus",{
                value: value,
                stage: stage,
                order: order,
                description: description,
                colour: colour
            }
        )
    }

    /**
     * Delete a casestatus
     * @param {string} id The id of the casestatus
     * @returns {Promise} A promise that contains the deleted casestatus
     */
    async delete(id) {
        // check id is a string of max 64 chars
        if (!checks.checkSize(1, 64, id)) {
            throw new Error("id must be a string of max 64 chars")
        }

        return await fetchInstance.delete(`/api/v1/caseStatus/${id}`)
    }

    /**
     * Update a casestatus
     * @param {string} id The id of the casestatus
     * @param {string} order The order to update
     * @param {string} description The new value of the parameter
     * @param {string} colour The new value of the parameter
     * @returns {Promise} A promise that contains the updated casestatus
     */
    async update(
        id,
        order = null,
        description = null,
        colour = null
    ) {
        // check id is a string of max 64 chars
        if (!checks.checkSize(1, 64, id)) {
            throw new Error("id must be a string of max 64 chars")
        }

        // check order is a number of max 999999
        if (order && !checks.checkSize(1, 999999, order)) {
            throw new Error("order must be a number of max 999999")
        }

        // check description is a string of max 1048576 chars
        if (description && !checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        // check colour is a string of max 7 chars
        if (colour && !checks.checkSize(1, 7, colour)) {
            throw new Error("colour must be a string of max 7 chars")
        }

        return await fetchInstance.put(`/api/v1/caseStatus/${id}`,{
                order: order,
                description: description,
                colour: colour
            }
        )
    }

}

module.exports.casestatus = new Casestatus()