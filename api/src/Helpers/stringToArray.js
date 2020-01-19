module.exports = function stringToArray(str, separator = ',') {
    return str.split(separator).map(part => part.trim());
}
