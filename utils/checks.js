module.exports.checkSize = function checkSize(min, max, str) {
    if (str.length < min || str.length > max) {
        return false
    }
    return true
}

module.exports.checkNumber = function checkNumber(min, max, str) {
    if (isNaN(str)) {
        return false
    }
    if (str < min || str > max) {
        return false
    }
    return true
}