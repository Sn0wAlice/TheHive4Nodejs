const fs = require('fs')
/**
 * This class is used to say hello
 */
const hello = class {
    printHello() {
        console.log("Hello World!")
    }
    printVersion() {
        console.log(
            (JSON.parse(fs.readFileSync('./package.json', 'utf8'))).version
        )
    }

    getVersion() {
        return (JSON.parse(fs.readFileSync('./package.json', 'utf8'))).version
    }
}

module.exports.hello = new hello()