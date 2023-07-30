const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the page API
 */
const Page = class {
    /**
     * Create page
     * @param {string} title The title of the page
     * @param {string} content The content of the page
     * @param {string} order The order of the page
     * @param {string} category The category of the page
     * @returns {Promise} The response of the request
     */
    async createPage(
        title,
        content,
        order = null,
        category
    ) {
        // check title between 1 and 128 characters
        if(!checks.checkSize(1, 512, title)) {
            throw new Error('Title must be between 1 and 128 characters')
        }

        // check content between 1 and 1048576 characters
        if(!checks.checkSize(1, 1048576, content)) {
            throw new Error('Content must be between 1 and 1048576 characters')
        }

        // check order between 1 and 999999
        if(order && !checks.checkNumber(1, 999999, order)) {
            throw new Error('Order must be between 1 and 128 characters')
        }

        // check category between 1 and 128 characters
        if(!checks.checkSize(1, 128, category)) {
            throw new Error('Category must be between 1 and 128 characters')
        }

        return await fetchInstance.post(`/api/v1/page`, {
            title: title,
            content: content,
            order: order,
            category: category
        })
    }

    /**
     * Delete page
     * @param {string} id The id of the page
     * @returns {Promise} The response of the request
     */
    async deletePage(
        id
    ) {
        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/page/${id}`)
    }

    /**
     * Update page
     * @param {string} id The id of the page
     * @param {string} title The title of the page
     * @param {string} content The content of the page
     * @param {string} order The order of the page
     * @param {string} category The category of the page
     * @returns {Promise} The response of the request
     */
    async updatePage(
        id,
        title = null,
        content = null,
        order = null,
        category = null
    ) {
        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        // check title between 1 and 512 characters
        if(title && !checks.checkSize(1, 512, title)) {
            throw new Error('Title must be between 1 and 512 characters')
        }

        // check content between 1 and 1048576 characters
        if(content && !checks.checkSize(1, 1048576, content)) {
            throw new Error('Content must be between 1 and 1048576 characters')
        }

        // check order between 1 and 999999
        if(order && !checks.checkNumber(1, 999999, order)) {
            throw new Error('Order must be between 1 and 999999')
        }

        // check category between 1 and 128 characters
        if(category && !checks.checkSize(1, 128, category)) {
            throw new Error('Category must be between 1 and 128 characters')
        }

        return await fetchInstance.patch(`/api/v1/page/${id}`, {
            title: title,
            content: content,
            order: order,
            category: category
        })
    }

    /**
     * Create a page in a case
     * @param {string} caseId The id of the case
     * @param {string} title The title of the page
     * @param {string} content The content of the page
     * @param {string} order The order of the page
     * @param {string} category The category of the page
     * @returns {Promise} The response of the request
     */
    async createPageInCase(
        caseId,
        title,
        content,
        order = null,
        category
    ) {
        // check caseId starts with '~'
        if(!caseId.startsWith('~')) {
            throw new Error('Case id must start with ~')
        }

        // check title between 1 and 512 characters
        if(!checks.checkSize(1, 512, title)) {
            throw new Error('Title must be between 1 and 512 characters')
        }

        // check content between 1 and 1048576 characters
        if(!checks.checkSize(1, 1048576, content)) {
            throw new Error('Content must be between 1 and 1048576 characters')
        }

        // check order between 1 and 999999
        if(order && !checks.checkNumber(1, 999999, order)) {
            throw new Error('Order must be between 1 and 999999')
        }

        // check category between 1 and 128 characters
        if(!checks.checkSize(1, 128, category)) {
            throw new Error('Category must be between 1 and 128 characters')
        }

        return await fetchInstance.post(`/api/v1/case/${caseId}/page`, {
            title: title,
            content: content,
            order: order,
            category: category
        })
    }

    /**
     * Delete a page in a case
     * @param {string} caseId The id of the case
     * @param {string} id The id of the page
     * @returns {Promise} The response of the request
     */
    async deletePageInCase(
        caseId,
        id
    ) {
        // check caseId starts with '~'
        if(!caseId.startsWith('~')) {
            throw new Error('Case id must start with ~')
        }

        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/case/${caseId}/page/${id}`)
    }

    /**
     * Update a page in a case
     * @param {string} caseId The id of the case
     * @param {string} id The id of the page
     * @param {string} title The title of the page
     * @param {string} content The content of the page
     * @param {string} order The order of the page
     * @param {string} category The category of the page
     * @returns {Promise} The response of the request
     */

    async updatePageInCase(
        caseId,
        id,
        title = null,
        content = null,
        order = null,
        category = null
    ) {
        // check caseId starts with '~'
        if(!caseId.startsWith('~')) {
            throw new Error('Case id must start with ~')
        }

        // check id starts with '~'
        if(!id.startsWith('~')) {
            throw new Error('Id must start with ~')
        }

        // check title between 1 and 512 characters
        if(title && !checks.checkSize(1, 512, title)) {
            throw new Error('Title must be between 1 and 512 characters')
        }

        // check content between 1 and 1048576 characters
        if(content && !checks.checkSize(1, 1048576, content)) {
            throw new Error('Content must be between 1 and 1048576 characters')
        }

        // check order between 1 and 999999
        if(order && !checks.checkNumber(1, 999999, order)) {
            throw new Error('Order must be between 1 and 999999')
        }

        // check category between 1 and 128 characters
        if(category && !checks.checkSize(1, 128, category)) {
            throw new Error('Category must be between 1 and 128 characters')
        }

        return await fetchInstance.patch(`/api/v1/case/${caseId}/page/${id}`, {
            title: title,
            content: content,
            order: order,
            category: category
        })
    }
}

module.exports.page = new Page()