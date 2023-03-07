const repeatString = function(string, numRepeat) {

    

    if (numRepeat < 0) {
        return 'ERROR'
    }
    
    let repeatedString = ''
    
    for (let i = 0; i < numRepeat; i++) {
        repeatedString = repeatedString + string
    }

    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;

