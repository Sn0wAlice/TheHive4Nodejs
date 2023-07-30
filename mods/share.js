const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the share API
 */
const Share = class {
    /**
     * update share
     * @param {string} id The id of the share
     * @param {string} profile The id of the profile
     * @returns {Promise} A promise that contains the updated share
     */
    async update(
        id,
        profile
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // profile is a string of max 64 chars
        if (!checks.checkSize(1, 64, profile)) {
            throw new Error("profile must be a string of max 64 chars")
        }

        return await fetchInstance.put(`/api/v1/share/${id}`, {
            profile: profile
        })
    }

    /**
     * delete share by id
     * @param {string} ids The ids of the share
     * @returns {Promise} A promise that contains the deleted share
     */
    async delete(ids) {
        // ids is an array of strings that starts with "~"
        for(const id of ids) {
            if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
                throw new Error("ids must be an array of strings of max 64 chars and start with ~")
            }
        }

        return await fetchInstance.delete(`/api/v1/case/share`, {
            ids: ids
        })
    }

    
}

module.exports.share = new Share()