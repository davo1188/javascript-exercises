const reverseString = function(string) {
    splitString = [];
    for (const char of string) {
        splitString.unshift(char);
    }
    return splitString.join('')
};

// Do not edit below this line
module.exports = reverseString;
