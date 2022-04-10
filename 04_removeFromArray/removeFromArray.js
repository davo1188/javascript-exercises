const removeFromArray = function(myArray, ...valsToCheck) {
    for (const val of valsToCheck) {
        if (myArray.includes(val)) {
            let index = myArray.indexOf(val);
            myArray.splice(index,1)
        }
    }
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
