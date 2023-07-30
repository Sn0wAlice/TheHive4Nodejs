const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Profile API
 */
const Profile = class {
    /**
     * Create a new profile
     * @param {string} name The name of the profile
     * @param {string[]} permissions The permissions of the profile
     * @returns {Promise} A promise that contains the created profile
     */
    async create(
        name,
        permissions = []
    ) {
        // name is a string of max 64 chars
        if (!checks.checkSize(1, 64, name)) {
            throw new Error("name must be a string of max 64 chars")
        }

        // permissions is an array of strings of max 32 chars
        for(const p of permissions) {
            if (!checks.checkSize(1, 32, p)) {
                throw new Error("permissions must be an array of strings of max 32 chars")
            }
        }

        return await fetchInstance.post( "/api/v1/profile",{
                name: name,
                permissions: permissions
            }
        )
    }

    /**
     * Get profile by id
     * @param {string} id The id of the profile
     * @returns {Promise} A promise that contains the profile
     */
    async get(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.get(`/api/v1/profile/${id}`)
    }

    /**
     * delete profile by id
     * @param {string} id The id of the profile
     * @returns {Promise} A promise that contains the deleted profile
     */
    async delete(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/profile/${id}`)
    }

    /**
     * Update a profile
     * @param {string} id The id of the profile
     * @param {string} name The name of the profile
     * @param {string[]} permissions The permissions of the profile
     */
    async update(
        id,
        name = null,
        permissions = null
    ) {
        // check id is a string of max 64 chars and starts with ~
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // name is a string of max 64 chars
        if (name && !checks.checkSize(1, 64, name)) {
            throw new Error("name must be a string of max 64 chars")
        }

        // permissions is an array of strings of max 32 chars
        if (permissions) {
            for(const p of permissions) {
                if (!checks.checkSize(1, 32, p)) {
                    throw new Error("permissions must be an array of strings of max 32 chars")
                }
            }
        }

        return await fetchInstance.put(`/api/v1/profile/${id}`, {
            name: name,
            permissions: permissions
        })
    }

}

module.exports.profile = new Profile()