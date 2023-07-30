const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the timeline API
 */
const Timeline = class {
    /**
     * Get case timeline by id
     * @param {string} id The id of the case
     * @returns {Promise} A promise that contains the timeline
     */
    async get(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.get(`/api/v1/case/${id}/timeline`)
    }

    /**
     * Create a custom event
     * @param {string} id The id of the case
     * @param {string} date The date of the event
     * @param {string} endDate The end date of the event
     * @param {string} title The title of the event
     * @param {string} description The description of the event
     * @returns {Promise} A promise that contains the created event
     */
    async createEvent(
        id,
        date,
        endDate = null,
        title,
        description
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }


        // title is a string of max 128 chars
        if (!checks.checkSize(1, 128, title)) {
            throw new Error("title must be a string of max 64 chars")
        }

        // description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        return await fetchInstance.post(`/api/v1/case/${id}/customEvent`, {
                date: date,
                endDate: endDate,
                title: title,
                description: description
            }
        )
    }

    /**
     * Delete a custom event
     * @param {string} id The id of the event
     * @returns {Promise} A promise that contains the deleted event
     */
    async deleteEvent(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/customEvent/${id}`)
    }

    /**
     * Update a custom event
     * @param {string} id The id of the event
     * @param {string} date The date of the event
     * @param {string} endDate The end date of the event
     * @param {string} title The title of the event
     * @param {string} description The description of the event
     * @returns {Promise} A promise that contains the updated event
     */
    async updateEvent(
        id,
        date = null,
        endDate = null,
        title = null,
        description = null
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // check the title if is 128 chars
        if (title && !checks.checkSize(1, 128, title)) {
            throw new Error("title must be a string of max 128 chars")
        }

        // check the description if is 1048576 chars
        if (description && !checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        return await fetchInstance.patch(`/api/v1/customEvent/${id}`, {
            date: date,
            endDate: endDate,
            title: title,
            description: description
        })
    }

}

module.exports.timeline = new Timeline()