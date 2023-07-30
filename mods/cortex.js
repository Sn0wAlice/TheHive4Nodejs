const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the Cortex API
 */
const Cortex = class {
    /**
     * Create an action
     * @param {string} responderId The responder id of the action
     * @param {string} cordexId The cortex id of the action
     * @param {string} objectType The object type of the action
     * @param {string} objectId The objectId type of the action
     * @param {string} parameters The parameters of the action
     * @param {string} tlp The tlp of the action
     * @returns {Promise} The response of the request
     */
    async createAction(
        responderId,
        cortexId,
        objectType,
        objectId,
        parameters,
        tlp
    ) {
        return await fetchInstance.post(`/api/connector/cortex/action`, {
            responderId: responderId,
            cortexId: cortexId,
            objectType: objectType,
            objectId: objectId,
            parameters: parameters,
            tlp: tlp
        })
    }

    /**
     * Get actions by entity
     * @param {string} entityType The entity type of the action
     * @param {string} entityId The entity id of the action
     */
    async getActionsByEntity(
        entityType,
        entityId
    ) {
        return await fetchInstance.get(`/api/connector/cortex/action/${entityType}/${entityId}`)
    }

    /**
     * List analyzers
     * @returns {Promise} The response of the request
     */
    async listAnalyzers() {
        return await fetchInstance.get(`/api/connector/cortex/analyzer`)
    }

    /**
     * List analyzers by type
     * @param {string} type The type of the analyzer
     * @returns {Promise} The response of the request
     */
    async listAnalyzersByType(
        type
    ) {
        return await fetchInstance.get(`/api/connector/cortex/analyzer/type/${type}`)
    }

    /**
     * Get analyzer by id
     * @param {string} id The id of the analyzer
     * @returns {Promise} The response of the request
     */
    async getAnalyzerById(
        id
    ) {
        return await fetchInstance.get(`/api/connector/cortex/analyzer/${id}`)
    }

    /**
     * Create a cortex job
     * @param {string} analyzerId The analyzer id of the job
     * @param {string} cordexId The cortex id of the job
     * @param {string} artifactId The artifact id of the job
     * @param {string} parameters The parameters of the job
     * @returns {Promise} The response of the request
     */
    async createJob(
        analyzerId,
        cortexId,
        artifactId,
        parameters
    ) {
        return await fetchInstance.post(`/api/connector/cortex/job`, {
            analyzerId: analyzerId,
            cortexId: cortexId,
            artifactId: artifactId,
            parameters: parameters
        })
    }

    /**
     * Get cortex job by id
     * @param {string} id The id of the job
     * @returns {Promise} The response of the request
     */
    async getJobById(
        id
    ) {
        return await fetchInstance.get(`/api/connector/cortex/job/${id}`)
    }

    /**
     * Get analyze template content
     * @param {string} analyzerId The analyzer id of the template
     * @returns {Promise} The response of the request
     */
    async getAnalyzeTemplateContent(
        analyzerId
    ) {
        //check the id starts with "~"
        if (!checks.startsWithTilde(analyzerId)) {
            throw new Error('The analyzer id must start with "~"')
        }

        return await fetchInstance.get(`/api/connector/cortex/analyzer/template/content/${analyzerId}`)
    }

    /**
     * Import analyzer templates
     * @param {string} templates The templates of the analyzer
     * @returns {Promise} The response of the request
     */
    async importAnalyzerTemplates(
        templates
    ) {
        return await fetchInstance.post(`/api/connector/cortex/analyzer/template/_import`, {
            templates: templates
        })
    }

    /**
     * Create analyzer template
     * @param {string} analyzerId The analyzer id of the template
     * @param {string} content The content of the template
     * @returns {Promise} The response of the request
     */
    async createAnalyzerTemplate(
        analyzerId,
        content
    ) {
        return await fetchInstance.post(`/api/connector/cortex/analyzer/template`, {
            analyzerId: analyzerId,
            content: content
        })
    }

    /**
     * Delete analyzer template
     * @param {string} analyzerTemplateId The analyzer id of the template
     * @returns {Promise} The response of the request
     */
    async deleteAnalyzerTemplate(
        analyzerTemplateId
    ) {
        return await fetchInstance.delete(`/api/connector/cortex/analyzer/template/${analyzerTemplateId}`)
    }

    /**
     * Update analyser template
     * @param {string} analyzerTemplateId The analyzer id of the template
     * @param {string} content The content of the template
     * @returns {Promise} The response of the request
     */
    async updateAnalyzerTemplate(
        analyzerTemplateId,
        content
    ) {
        //check the id starts with "~"
        if (!checks.startsWithTilde(analyzerTemplateId)) {
            throw new Error('The analyzer template id must start with "~"')
        }

        return await fetchInstance.patch(`/api/connector/cortex/analyzer/template/${analyzerTemplateId}`, {
            content: content
        })
    }

    /**
     * List responders
     * @param {string} type The type of the responder
     * @param {string} id The id of the responder
     * @returns {Promise} The response of the request
     */
    async listResponders(
        type,
        id
    ) {
        //check the id starts with "~"
        if (!checks.startsWithTilde(id)) {
            throw new Error('The responder id must start with "~"')
        }

        return await fetchInstance.get(`/api/connector/cortex/responder/${type}/${id}`)
    }
}

module.exports.cortex = new Cortex()