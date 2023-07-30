const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the User API
 */
const User = class {
    /**
     * Get current user info
     * @returns {Promise} A promise that contains the user info
     */
    async get() {
        return await fetchInstance.get(`/api/v1/user/current`)
    }

    /**
     * Create a new user
     * @param {string} login The login of the user
     * @param {string} name The name of the user
     * @param {string} email The email of the user
     * @param {string} password The password of the user
     * @param {string} profile The profile of the user
     * @param {string} organisation The organisation of the user
     * @param {string} type The type of the user
     * @returns {Promise} A promise that contains the created user
     */
    async create(
        login,
        name,
        email = null,
        password,
        profile,
        organisation = null,
        type
    ) {
        // check name is a string of max 128 chars
        if (!checks.checkSize(1, 128, name)) {
            throw new Error("name must be a string of max 128 chars")
        }

        // check login is a string of max 128 chars
        if (!checks.checkSize(1, 128, login)) {
            throw new Error("login must be a string of max 128 chars")
        }

        // check email is a string of max 128 chars
        if (!checks.checkSize(1, 128, email)) {
            throw new Error("email must be a string of max 128 chars")
        }

        // check password is a string of max 128 chars
        if (!checks.checkSize(1, 128, password)) {
            throw new Error("password must be a string of max 128 chars")
        }

        // check profile is a string of max 128 chars
        if (!checks.checkSize(1, 128, profile)) {
            throw new Error("profile must be a string of max 128 chars")
        }

        // check organisation is a string of max 128 chars
        if (organisation && !checks.checkSize(1, 128, organisation)) {
            throw new Error("organisation must be a string of max 128 chars")
        }

        // check type is allowed
        if (!["Service", "Normal"].includes(type)) {
            throw new Error("type must be Service or Normal")
        }

        return await fetchInstance.post( "/api/v1/user",{
                login: login,
                name: name,
                email: email,
                password: password,
                profile: profile,
                organisation: organisation,
                type: type
            }
        )
    }

    /**
     * Get user by id
     * @param {string} id The id of the user
     * @returns {Promise} A promise that contains the user
     */
    async get(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.get(`/api/v1/user/${id}`)
    }

    /**
     * Lock an user by id
     * @param {string} id The id of the user
     * @returns {Promise} A promise that contains the locked user
     */
    async lock(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/user/${id}`)
    }

    /**
     * Update an user by id
     * @param {string} id The id of the user
     * @param {string} name The name of the user
     * @param {string} organisation The organisation of the user
     * @param {string} profile The profile of the user
     * @param {string} locked The locked status of the user
     * @param {string} avatar The avatar of the user
     * @param {string} email The email of the user
     * @param {string} defaultOrganisation The default organisation of the user
     * @param {string} type The default profile of the user
     * @returns {Promise} A promise that contains the updated user
     */
    async update(
        id,
        name = null,
        organisation = null,
        profile = null,
        locked = null,
        avatar = null,
        email = null,
        defaultOrganisation = null,
        type = null
    ) {
        // check id is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // check name is a string of max 128 chars
        if (name && !checks.checkSize(1, 128, name)) {
            throw new Error("name must be a string of max 128 chars")
        }

        // check organisation is a string of max 128 chars
        if (organisation && !checks.checkSize(1, 128, organisation)) {
            throw new Error("organisation must be a string of max 128 chars")
        }

        // check profile is a string of max 128 chars
        if (profile && !checks.checkSize(1, 128, profile)) {
            throw new Error("profile must be a string of max 128 chars")
        }

        // check locked is a boolean
        if (locked && typeof locked !== "boolean") {
            throw new Error("locked must be a boolean")
        }

        // check avatar is a string of max 128 chars
        if (avatar && !checks.checkSize(1, 128, avatar)) {
            throw new Error("avatar must be a string of max 128 chars")
        }

        // check email is a string of max 128 chars
        if (email && !checks.checkSize(1, 128, email)) {
            throw new Error("email must be a string of max 128 chars")
        }

        // check defaultOrganisation is a string of max 128 chars
        if (defaultOrganisation && !checks.checkSize(1, 128, defaultOrganisation)) {
            throw new Error("defaultOrganisation must be a string of max 128 chars")
        }

        // check type is allowed
        if (type && !["Service", "Normal"].includes(type)) {
            throw new Error("type must be Service or Normal")
        }

        return await fetchInstance.patch(`/api/v1/user/${id}`, {
            name: name,
            organisation: organisation,
            profile: profile,
            locked: locked,
            avatar: avatar,
            email: email,
            defaultOrganisation: defaultOrganisation,
            type: type
        })
    }

    /**
     * Delete an user by id
     * @param {string} id The id of the user
     * @returns {Promise} A promise that contains the deleted user
     */
    async delete(id) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/user/${id}/force`)
    }

    /**
     * Set user organisation
     * @param {string} id The id of the user
     * @param {string[]} organisations The organisations of the user
     * @returns {Promise} A promise that contains the updated user
     */
    async setOrganisations(
        id, 
        organisations
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.patch(`/api/v1/user/${id}/organisations`, {
            organisations: organisations
        })
    }

    /**
     * Set user password
     * @param {string} id The id of the user
     * @param {string} password The password of the user
     * @returns {Promise} A promise that contains the updated user
     */
    async setPassword(
        id, 
        password
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // check password is a string of max 128 chars
        if (!checks.checkSize(1, 128, password)) {
            throw new Error("password must be a string of max 128 chars")
        }

        return await fetchInstance.post(`/api/v1/user/${id}/password/set`, {
            password: password
        })
    }

    /**
     * Change user password
     * @param {string} id The id of the user
     * @param {string} oldPassword The old password of the user
     * @param {string} newPassword The new password of the user
     * @returns {Promise} A promise that contains the updated user
     */
    async changePassword(
        id, 
        oldPassword,
        newPassword
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        // check oldPassword is a string of max 128 chars
        if (!checks.checkSize(1, 128, oldPassword)) {
            throw new Error("oldPassword must be a string of max 128 chars")
        }

        // check newPassword is a string of max 128 chars
        if (!checks.checkSize(1, 128, newPassword)) {
            throw new Error("newPassword must be a string of max 128 chars")
        }

        return await fetchInstance.post(`/api/v1/user/${id}/password/change`, {
            currentPassword: oldPassword,
            password: newPassword
        })
    }

    /**
     * Get user api keys
     * @param {string} id The id of the user
     * @returns {Promise} A promise that contains the api keys of the user
     */
    async getApiKeys(
        id
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.get(`/api/v1/user/${id}/key`)
    }

    /**
     * Remove user api key
     * @param {string} id The id of the user
     * @returns {Promise} A promise that contains the api keys of the user
     */
    async removeApiKey(
        id,
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/user/${id}/key`)
    }

    /**
     * Renew user api key
     * @param {string} id The id of the user
     * @returns {Promise} A promise that contains the api keys of the user
     */
    async renewApiKey(
        id,
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.post(`/api/v1/user/${id}/key/renew`)
    }

    /**
     * Get user avatar
     * @param {string} id The id of the user
     * @returns {Promise} A promise that contains the avatar of the user
     */
    async getAvatar(
        id
    ) {
        // id is a string that starts with "~"
        if (!checks.checkSize(1, 64, id) || !id.startsWith("~")) {
            throw new Error("id must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.get(`/api/v1/user/${id}/avatar`)
    }

}

module.exports.user = new User()