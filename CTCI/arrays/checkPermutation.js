const assert = require('assert');

/**
 * Given two strings, determine if one is a permutation of the other.
 * To make a permutation valid, we can check character frequencies
 */
const checkPermutation = (s1, s2) => {
    if (s1.length == 0 || s2.length == 0) return false;

    // Maps chars to occurences in s1
    let charFreqs = {};

    // Increment character frequencies from s1
    for (let i = 0; i < s1.length; i++) {
        if (!(s1[i] in charFreqs)) charFreqs[s1[i]] = 0;
        charFreqs[s1[i]] += 1;
    }

    // Decrement character frequencies from s2
    for (let i = 0; i < s2.length; i++) {
        if (!(s2[i] in charFreqs)) return false;
        charFreqs[s2[i]] -= 1;
        // Character count reaches 0, remove from object
        if (charFreqs[s2[i]] == 0) delete charFreqs[s2[i]];
        
    }
    // Ensure all characters have been used
    if (Object.keys(charFreqs).length == 0) return true;
    return false;
}

const checkPermutation_driver = () => {
    assert(checkPermutation("taco", "acot") == true);
    assert(checkPermutation("", "acot") == false);
    assert(checkPermutation("taco", "") == false);
    assert(checkPermutation("taco", "acota") == false);
    assert(checkPermutation("tacoa", "acot") == false);
    assert(checkPermutation("tacoa", "acota") == true);
    assert(checkPermutation("o", "o") == true);
    assert(checkPermutation("a", "o") == false);

}

checkPermutation_driver();