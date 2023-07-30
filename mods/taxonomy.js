const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Taxonomy API
 */
const Taxonomy = class {
    /**
     * Create a new Taxonomy
     * @param {string} namespace The namespace of the taxonomy
     * @param {string} description The description of the taxonomy
     * @param {string} version The version of the taxonomy
     * @param {string} exclusive Whether the taxonomy is exclusive or not
     * @param {string} predicate The predicate of the taxonomy
     * @param {string} values The color of the taxonomy
     */
    async create(
        namespace,
        description,
        version,
        exclusive,
        predicate,
        values
    ) {
        // check namespace is a string of max 128 chars
        if (!checks.checkSize(1, 128, namespace)) {
            throw new Error("namespace must be a string of max 128 chars")
        }

        // check description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        // check version is a number of max 999999
        if (!checks.checkSize(1, 999999, version)) {
            throw new Error("version must be a number of max 999999")
        }

        // check exclusive is a boolean
        if(!typeof exclusive === "boolean") {
            throw new Error("exclusive must be a boolean")
        }

        return await fetchInstance.post( "/api/v1/taxonomy",{
                namespace: namespace,
                description: description,
                version: version,
                exclusive: exclusive,
                predicate: predicate,
                values: values
            }
        )
    }

    /**
     * Import taxonomy from a zip file
     * @param {string} file The zip file
     * @returns {object} The response
     */
    async import(file) {
        return await fetchInstance.post( "/api/v1/taxonomy/import-zip",{
            file: file
        })
    }

    /**
     * Activate a taxonomy
     * @param {string} id The id of the taxonomy
     * @returns {object} The response
     */
    async activate(id) {
        return await fetchInstance.post( "/api/v1/taxonomy/" + id + "/activate")
    }

    /**
     * Deactivate a taxonomy
     * @param {string} id The id of the taxonomy
     * @returns {object} The response
     */
    async deactivate(id) {
        return await fetchInstance.post( "/api/v1/taxonomy/" + id + "/deactivate")
    }

    /**
     * Get a taxonomy
     * @param {string} id The id of the taxonomy
     * @returns {object} The response
     */
    async get(id) {
        return await fetchInstance.get( "/api/v1/taxonomy/" + id)
    }

    /**
     * Delete a taxonomy
     * @param {string} id The id of the taxonomy
     * @returns {object} The response
     */
    async delete(id) {
        return await fetchInstance.delete( "/api/v1/taxonomy/" + id)
    }

}

module.exports.taxonomy = new Taxonomy()