const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the MISP API
 */
const MISP = class {
    /**
     * Get MISP status
     * @returns {Promise} The response of the request
     */
    async getMISPStatus() {
        return await fetchInstance.get(`/api/v1/misp/status`)
    }

    /**
     * Sync with MISP server
     * @returns {Promise} The response of the request
     */
    async syncWithMISP() {
        return await fetchInstance.post(`/api/v1/misp/_syncAlerts`)
    }

    /**
     * Export case to MISP
     * @param {string} caseid The case id of the case
     * @param {string} mispName The name of the MISP server
     */
    async exportCaseToMISP(
        caseid,
        mispName
    ) {
        return await fetchInstance.post(`/api/v1/misp/export/${caseid}/${mispName}`)
    }

    /**
     * Import case from MISP
     * @param {string} _json The json of the MISP event
     * @param {string} file The file of the MISP event
     * @returns {Promise} The response of the request
     */
    async importCaseFromMISP(
        _json,
        file
    ) {
        return await fetchInstance.post(`/api/v1/misp/case/import`, {
            _json: _json,
            file: file
        })
    }
}

module.exports.misp = new MISP()