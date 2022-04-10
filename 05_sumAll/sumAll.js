const sumAll = function(a, b) {
    let result = 0
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else if (b > a) {
        for (i = b; i <= a; i++) {
            result += i;
        }
        return result;        
    } else {
        for (i = a; i <= b; i++) {
            result += i;
        }
        return result;
    }

};

// Do not edit below this line
module.exports = sumAll;
