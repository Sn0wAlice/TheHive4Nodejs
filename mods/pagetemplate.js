const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

const checks = require('../utils/checks.js')

/**
 * This class is used to interact with the PageTemplate API
 */
const PageTemplate = class {
    /**
     * Create page template
     * @param {string} title The title of the page template
     * @param {string} content The content of the page template
     * @param {string} order The order of the page template
     * @param {string} category The category of the page template
     * @returns {Promise} The response of the request
     */
    async createPageTemplate(
        title,
        content,
        order,
        category
    ) {
        // check title is a string of max 512 characters
        if(!checks.checkSize(1, 512, title)) {
            throw new Error('title must be a string of max 512 characters')
        }

        // check content is a string of max 1048576 characters
        if(!checks.checkSize(1, 1048576, content)) {
            throw new Error('content must be a string of max 1048576 characters')
        }

        // check order is a number
        if(!checks.checkNumber(0, 999999, order)) {
            throw new Error('order must be a number')
        }

        // check category is a string of max 128 characters
        if(!checks.checkSize(1, 128, category)) {
            throw new Error('category must be a string of max 128 characters')
        }

        return await fetchInstance.post(`/api/v1/pagetemplate`, {
            title: title,
            content: content,
            order: order,
            category: category
        })
    }

    /**
     * delete page template by id
     * @param {string} id The id of the page template
     * @returns {Promise} The response of the request
     */
    async deletePageTemplateById(
        id
    ) {
        //check id starts with ~
        if(!checks.checkStartsWith('~', id)) {
            throw new Error('id must start with ~')
        }

        return await fetchInstance.delete(`/api/v1/pagetemplate/${id}`)
    }

    /** 
     * Update page template by id
     * @param {string} id The id of the page template
     * @param {string} title The title of the page template
     * @param {string} content The content of the page template
     * @param {string} order The order of the page template
     * @param {string} category The category of the page template
     * @returns {Promise} The response of the request
    */
    async updatePageTemplateById(
        id,
        title = undefined,
        content = undefined,
        order = undefined,
        category = undefined
    ) {
        // check id starts with ~
        if(!checks.checkStartsWith('~', id)) {
            throw new Error('id must start with ~')
        }

        // check title is a string of max 512 characters
        if(title !== undefined && !checks.checkSize(1, 512, title)) {
            throw new Error('title must be a string of max 512 characters')
        }

        // check content is a string of max 1048576 characters
        if(content !== undefined && !checks.checkSize(1, 1048576, content)) {
            throw new Error('content must be a string of max 1048576 characters')
        }

        // check order is a number
        if(order !== undefined && !checks.checkNumber(0, 999999, order)) {
            throw new Error('order must be a number')
        }

        // check category is a string of max 128 characters
        if(category !== undefined && !checks.checkSize(1, 128, category)) {
            throw new Error('category must be a string of max 128 characters')
        }

        return await fetchInstance.put(`/api/v1/pagetemplate/${id}`, {
            title: title,
            content: content,
            order: order,
            category: category
        })
    }


}

module.exports.pagetemplate = new PageTemplate()