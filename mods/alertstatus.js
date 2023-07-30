const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the alertstatus API
 */
const Alertstatus = class {
    /**
     * Create a new alert status
     * @param {string} value The value of the alert status
     * @param {string} stage The stage of the alert status
     * @param {string} order The order of the alert status
     * @param {string} description The description of the alert status
     * @param {string} colour The color of the alert status
     * @returns {Promise} A promise that contains the created alert status
     */
    async create(
        value,
        stage,
        order = 0,
        description = null,
        colour = "#F1A5E7"
    ) {
        // check value is a string that starts with "~"
        if (!checks.checkStartsWith("~", value)) {
            throw new Error("value must be a string that starts with ~")
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

        return await fetchInstance.post( "/api/v1/alertStatus",{
                value: value,
                stage: stage,
                order: order,
                description: description,
                colour: colour
            }
        )
    }

    /**
     * Delete an alert status
     * @param {string} id The id of the alert status
     * @returns {Promise} A promise that contains the deleted alert status
     */
    async delete(id) {
        // check id is a string of 24 chars
        if (!checks.checkSize(24, 24, id)) {
            throw new Error("id must be a string of 24 chars")
        }

        return await fetchInstance.delete(`/api/v1/alertStatus/${id}`)
    }

    /**
     * Update an alert status
     * @param {string} id The id of the alert status
     * @param {string} order The order of the alert status
     * @param {string} description The description of the alert status
     * @param {string} colour The color of the alert status
     * @returns {Promise} A promise that contains the updated alert status
     */
    async update(
        id,
        order = null,
        description = null,
        colour = null
    ) {
        // check id is a string of 24 chars
        if (!checks.checkSize(24, 24, id)) {
            throw new Error("id must be a string of 24 chars")
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

        return await fetchInstance.patch(`/api/v1/alertStatus/${id}`,{
                order: order,
                description: description,
                colour: colour
            }
        )
    }
}

module.exports.alertstatus = new Alertstatus()