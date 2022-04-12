const palindromes = function (word) {
    let re = /[\W_]/g;
    let lowRegStr = word.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr
};

// Do not edit below this line
module.exports = palindromes;
