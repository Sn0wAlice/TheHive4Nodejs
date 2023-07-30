const fetch = require('../utils/fetch.js')
const fetchInstance = fetch.getInstance()

module.exports.query = async function query(query) {
    return await fetchInstance.post('/api/v1/query', query)
}