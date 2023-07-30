const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the case-report API
 */
const CaseReport = class {
    /**
     * render case report template GET
     * @param {string} format The format of the report
     * @param {string} caseReportTemplateId The id of the case report template
     * @param {string} caseId The id of the case
     * @param {number} maxElements The max number of elements
     * @returns {Promise} A promise that contains the rendered case report template
     */
    async render(
        format,
        caseReportTemplateId,
        caseId,
        maxElements = 100
    ) {
        // check caseReportTemplateId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, caseReportTemplateId) || !caseReportTemplateId.startsWith("~")) {
            throw new Error("caseReportTemplateId must be a string of max 64 chars and start with ~")
        }

        // check caseId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of max 64 chars and start with ~")
        }

        // check maxElements is >= 1
        if (maxElements < 1) {
            throw new Error("maxElements must be >= 1")
        }

        return await fetchInstance.get(`/api/v1/caseReport/render`, {
            format: format,
            caseReportTemplateId: caseReportTemplateId,
            caseId: caseId,
            maxElements: maxElements
        })
    }

    /**
     * Render case report template POST
     * @param {string} format The format of the report
     * @param {string} definition The definition of the report
     * @param {string} caseReportTemplateId The id of the case report template
     * @param {string} caseId The id of the case
     * @param {number} maxElements The max number of elements
     * @returns {Promise} A promise that contains the rendered case report template
     */
    async renderPost(
        format,
        definition,
        caseReportTemplateId,
        caseId,
        maxElements = 100
    ) {
        // check caseReportTemplateId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, caseReportTemplateId) || !caseReportTemplateId.startsWith("~")) {
            throw new Error("caseReportTemplateId must be a string of max 64 chars and start with ~")
        }

        // check caseId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of max 64 chars and start with ~")
        }

        // check maxElements is >= 1
        if (maxElements < 1) {
            throw new Error("maxElements must be >= 1")
        }

        return await fetchInstance.post(`/api/v1/caseReport/render`, {
            format: format,
            definition: definition,
            caseReportTemplateId: caseReportTemplateId,
            caseId: caseId,
            maxElements: maxElements
        })
    }

    /**
     * Generate case report template
     * @param {string} caseId The id of the case
     * @param {string} caseReportTemplateId The id of the case report template
     * @param {string} format The format of the report
     * @returns {Promise} A promise that contains the generated case report template
     */
    async generate(
        caseId,
        caseReportTemplateId,
        format
    ) {
        // check caseId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of max 64 chars and start with ~")
        }

        // check caseReportTemplateId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, caseReportTemplateId) || !caseReportTemplateId.startsWith("~")) {
            throw new Error("caseReportTemplateId must be a string of max 64 chars and start with ~")
        }

        // check format is a string of max 64 chars
        if (!checks.checkSize(1, 64, format)) {
            throw new Error("format must be a string of max 64 chars")
        }

        return await fetchInstance.get(`/api/v1/case/${caseId}/report`, {
            caseReportTemplateId: caseReportTemplateId,
            format: format
        })
    }

    /**
     * Upload case report
     * @param {string} caseId The id of the case
     * @param {string} file The file to upload
     */
    async upload(
        caseId,
        file
    ) {
        // check caseId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, caseId) || !caseId.startsWith("~")) {
            throw new Error("caseId must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.post(`/api/v1/case/${caseId}/report/upload`, {
            file: file
        })
    }

    /**
     * Download case report
     * @param {string} reportId The id of the report
     * @returns {Promise} A promise that contains the case report
     */
    async download(
        reportId
    ) {
        // check reportId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, reportId) || !reportId.startsWith("~")) {
            throw new Error("reportId must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.get(`/api/v1/caseReport/${reportId}/download`)
    }

    /**
     * Delete case report
     * @param {string} reportId The id of the report
     * @returns {Promise} A promise that contains the deleted case report
     */
    async delete(
        reportId
    ) {
        // check reportId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, reportId) || !reportId.startsWith("~")) {
            throw new Error("reportId must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.delete(`/api/v1/caseReport/${reportId}`)
    }

    /**
     * Update case report
     * @param {string} reportId The id of the report
     * @param {string} file The file to upload
     * @returns {Promise} A promise that contains the updated case report
     */
    async update(
        reportId,
        file
    ) {
        // check reportId is a string of max 64 chars and starts with "~"
        if (!checks.checkSize(1, 64, reportId) || !reportId.startsWith("~")) {
            throw new Error("reportId must be a string of max 64 chars and start with ~")
        }

        return await fetchInstance.patch(`/api/v1/caseReport/${reportId}`, {
            file: file
        })
    }

    /**
     * List all supported formats
     * @returns {Promise} A promise that contains the list of all supported formats
     */
    async listFormats() {
        return await fetchInstance.get(`/api/v1/caseReport/formats`)
    }
}

module.exports.casereport = new CaseReport()