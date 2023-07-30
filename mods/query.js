const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

/**
 * A function to execute a query on thehive
 * @param {Object} query The query to execute
 */
module.exports.query = async function query(query) {
    return await fetchInstance.post('/api/v1/query', query)
}