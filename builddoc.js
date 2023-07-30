const fs = require('fs');

const file1 = fs.readFileSync('./tmp/mods.md', 'utf8')
const file2 = fs.readFileSync('./tmp/README.md', 'utf8')

const out = file2.replace('__DOC__', file1)

fs.writeFileSync('./README.md', out, 'utf8')