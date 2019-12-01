const assert = require('assert');
/**
 * Determines if a string contains all unique characters. 
 * Uses additional data structures for O(n) runtime.
 */
const isUnique = (s) => {
    if (s.length == 0 || s.length == 1) return true;

    let chars = new Set();
    for (let i = 0; i < s.length; i++) {
        if (chars.has(s[i])) return false;
        chars.add(s[i]);
    }
    return true;
}

 /**
  * Determines if a string contains all unique characters.
  * Uses no additional data structures, giving O(n log n) runtime to sort the string.
  */
 const isUniqueNoDS = (s) => {
    if (s.length == 0 || s.length == 1) return true;

    let sorted =  s.split('').sort();
    let char = sorted[0];
    for (let i = 1; i < s.length; i++) {
        if (sorted[i] == char) return false;
        char = sorted[i];
    }
    return true;
 }

 const isUnique_driver = () => {
     assert(isUnique('abcd') == true);
     assert(isUnique('dabcd') == false);
     assert(isUnique('a') == true);
     assert(isUniqueNoDS('abcd') == true);
     assert(isUniqueNoDS('dabcd') == false);
     assert(isUniqueNoDS('a') == true);
 }

 isUnique_driver();