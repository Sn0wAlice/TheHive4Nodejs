const thehive4nodejs = require('./index.js');


// Change this
const myThehive = new thehive4nodejs(
    "http://127.0.0.1", "9000", ""
)

/**
 * Delete old knowledge database and inject new one
 */
async function main() {
    await myThehive.custom.knowledge.backupKnowledgeDatabase("/path/to/my/database") // change the path (default './backup')
    await myThehive.custom.knowledge.deleteKnowledgeDatabase()
    await myThehive.custom.knowledge.restoreKnowledgeDatabase("/path/to/my/database") // change the path (default './backup')
}

main()