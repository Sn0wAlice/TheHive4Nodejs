const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Login API
 */
const Login = class {
    /**
     * Login
     * @param {string} user The user to login
     * @param {string} password The password of the user
     * @param {string} organisation The organisation of the user
     * @param {string} code The code of the user
     */
    async login(
        user,
        password,
        organisation = null,
        code = null
    ) {
        // check user between 1 and 128 characters
        if(!checks.checkSize(1, 128, user)) {
            throw new Error('User must be between 1 and 128 characters')
        }

        // check password between 1 and 128 characters
        if(!checks.checkSize(1, 128, password)) {
            throw new Error('Password must be between 1 and 128 characters')
        }

        // check organisation between 1 and 128 characters
        if(organisation && !checks.checkSize(1, 128, organisation)) {
            throw new Error('Organisation must be between 1 and 128 characters')
        }

        // check code between 1 and 128 characters
        if(code && !checks.checkSize(1, 128, code)) {
            throw new Error('Code must be between 1 and 128 characters')
        }

        return await fetchInstance.post(`/api/v1/login`, {
            user: user,
            password: password,
            organisation: organisation,
            code: code
        })
    }

    /**
     * Logout
     * @returns {Promise} The response of the request
     */
    async logout() {
        return await fetchInstance.post(`/api/v1/logout`)
    }

    /** 
     * Logout (POST)
     * @returns {Promise} The response of the request
     */
    async logoutPost() {
        return await fetchInstance.post(`/api/v1/logout`)
    }

    /**
     * Get current password policy
     * @returns {Promise} The response of the request
     */
    async getPasswordPolicy() {
        return await fetchInstance.get(`/api/v1/auth/local/passwordPolicy`)
    }
}

module.exports.login = new Login()