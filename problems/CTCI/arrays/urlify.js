const assert = require('assert');
/**
 * Adds %20 whenever a space is detected within a string.
 * Leading and trailing spaces should just be removed, not replaced.
 */
const urlify = (s) => {
    if (s.length == 0) return "";
    
    let strArr = s.split('');

    // Count leading spaces
    let startSpaces = 0;
    while (strArr[startSpaces] == " " && startSpaces < strArr.length) {
        startSpaces += 1;
    }
    // Remove leading spaces
    strArr.splice(0, startSpaces);
    
    let endIndex = strArr.length - 1;
    let endSpaces = 0;
    // Count trailing spaces
    while (strArr[endIndex] == " " && endIndex >= 0) {
        endIndex -= 1;
        endSpaces += 1;
    }
    // Remove trailing spaces
    strArr.splice(endIndex + 1, endSpaces);

    // Substitute %,2,0 for each space
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == " ") {
            strArr.splice(i, 1, "%", "2", "0");
        }
    }
    return strArr.join('');
}

const urlify_driver = () => {
    assert(urlify("  the quick brown fox jumps over the lazy dog ") == "the%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog");
    assert(urlify("  a") == "a");
    assert(urlify("a  ") == "a");
    assert(urlify("  a b") == "a%20b");
    assert(urlify(" ") == "");
}

urlify_driver();