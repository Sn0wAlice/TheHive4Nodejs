const fs = require('fs')

// export a function that can read all files in a directory
module.exports = function readDir(dir) {
    // read the directory
    const files = fs.readdirSync(dir)
    // create an empty array
    let modules = []
    // loop through all files
    for (let file of files) {
        // check if the file is a javascript file
        if (file.endsWith('.js')) {
            // if it is, push it to the array
            modules.push(file)
        }
    }
    // return the array
    return modules
}