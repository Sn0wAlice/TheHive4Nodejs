const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the ttp API
 */
const Ttp = class {
    /**
     * Create procédure for case
     * @param {string} caseId The id of the case
     * @param {string} patterndId The id of the pattern
     * @param {string} occurDate The date of the occurence
     * @param {string} tactic The tactic
     * @param {string} description The description
     */
    async create(
        caseId,
        patternId,
        occurDate,
        tactic,
        description
    ) {
        // caseId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of max 64 chars and start with ~")
        }

        // patternId is a string of max 128 char
        if (!checks.checkSize(1, 128, patternId)) {
            throw new Error("patternId must be a string of max 128 chars")
        }

        // tactic is a string of max 32 chars
        if (!checks.checkSize(1, 32, tactic)) {
            throw new Error("tactic must be a string of max 32 chars")
        }

        // description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        return await fetchInstance.post(`/api/v1/case/${caseId}/procedure`,{
                patternId: patternId,
                occurDate: occurDate,
                tactic: tactic,
                description: description
            }
        )
    }

    /**
     * Create several procedure for case
     * @param {string} caseId The id of the case
     * @param {string} procedures The procedures
     * @returns {Promise} A promise that contains the created procedures
     */
    async createSeveral(
        caseId,
        procedures
    ) {
        // caseId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of max 64 chars and start with ~")
        }

        // procedures is an array of procedures
        if (!Array.isArray(procedures)) {
            throw new Error("procedures must be an array")
        }

        return await fetchInstance.post(`/api/v1/case/${caseId}/procedures`,{
                procedures: procedures
            }
        )
    }

    /**
     * Create procedure for alert
     * @param {string} alertId The id of the alert
     * @param {string} patternId The id of the pattern
     * @param {string} occurDate The date of the occurence
     * @param {string} tactic The tactic
     * @param {string} description The description
     * @returns {Promise} A promise that contains the created procedure
     */
    async createAlert(
        alertId,
        patternId,
        occurDate,
        tactic,
        description
    ) {
        // alertId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, alertId) || !alertId.startsWith("~")) {
            throw new Error("alertId must be a string of max 64 chars and start with ~")
        }

        // patternId is a string of max 128 chars
        if (!checks.checkSize(1, 128, patternId)) {
            throw new Error("patternId must be a string of max 128 chars")
        }

        // tactic is a string of max 32 chars
        if (!checks.checkSize(1, 32, tactic)) {
            throw new Error("tactic must be a string of max 32 chars")
        }

        // description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        return await fetchInstance.post(`/api/v1/alert/${alertId}/procedure`,{
                patternId: patternId,
                occurDate: occurDate,
                tactic: tactic,
                description: description
            }
        )
    }

    /**
     * Create several procedure for alert
     * @param {string} alertId The id of the alert
     * @param {string} procedures The procedures
     * @returns {Promise} A promise that contains the created procedures
     */
    async createSeveralAlert(
        alertId,
        procedures
    ) {
        // alertId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, alertId) || !alertId.startsWith("~")) {
            throw new Error("alertId must be a string of max 64 chars and start with ~")
        }

        // procedures is an array of procedures
        if (!Array.isArray(procedures)) {
            throw new Error("procedures must be an array")
        }

        return await fetchInstance.post(`/api/v1/alert/${alertId}/procedures`,{
                procedures: procedures
            }
        )
    }

    /**
     * delete procedure
     * @param {string} procedureId The id of the procedure
     * @returns {Promise} A promise that contains the deleted procedure
     */
    async delete(
        procedureId
    ) {
        // procedureId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, procedureId) || !procedureId.startsWith("~")) {
            throw new Error("procedureId must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/procedure/${procedureId}`)
    }

    /**
     * Update procedure
     * @param {string} procedureId The id of the procedure
     * @param {string} description The description
     * @param {string} occurDate The date of the occurence
     * @returns {Promise} A promise that contains the updated procedure
     */
    async update(
        procedureId,
        description,
        occurDate
    ) {
        // procedureId is a string of max 64 chars and start with ~
        if (!checks.checkSize(1, 64, procedureId) || !procedureId.startsWith("~")) {
            throw new Error("procedureId must be a string of max 64 chars and start with ~")
        }

        // description is a string of max 1048576 chars
        if (!checks.checkSize(1, 1048576, description)) {
            throw new Error("description must be a string of max 1048576 chars")
        }

        return await fetchInstance.patch(`/api/v1/procedure/${procedureId}`,{
                description: description,
                occurDate: occurDate
            }
        )
    }
}

module.exports.ttp = new Ttp()