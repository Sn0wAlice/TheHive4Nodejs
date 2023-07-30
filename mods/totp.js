const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the TOTP API
 */
const TOTP = class {
    /**
     * Get TOTP secret
     * @returns {Promise} The response of the request
     */
    async getSecret() {
        return await fetchInstance.get('/api/v1/auth/totp/get')
    }

    /**
     * Set TOTP secret
     * @param {string} code The code to set the secret
     * @param {string} secret The secret to set
     * @returns {Promise} The response of the request
     */
    async setSecret(code, secret) {
        // check the code is a string between 1 and 512 characters
        if(!checks.checkNumber(1, 999999, code)) {
            throw new Error('Code must be between 1 and 999999')
        }

        // check the secret is a string between 1 and 512 characters
        if(!checks.checkSize(1, 512, secret)) {
            throw new Error('Secret must be between 1 and 512 characters')
        }

        // create the body
        const body = {
            code: code,
            secret: secret
        }

        return await fetchInstance.post('/api/v1/auth/totp/set', body)
    }
    /**
     * Unset TOTP secret
     * @returns {Promise} The response of the request
     */
    async unsetSecret() {
        return await fetchInstance.get('/api/v1/auth/totp/unset')
    }

    /**
     * Unset TOTP secret for user
     * @param {string} user The email of userid of the user to unset the secret
     * @returns {Promise} The response of the request
     */
    async unsetSecretForUser(user) {
        return await fetchInstance.post('/api/v1/auth/totp/unset/' + user)
    }
}

module.exports.totp = new TOTP()