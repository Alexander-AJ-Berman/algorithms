const assert = require('assert');

/**
 * Given a string s, returns all valid permutations of S
 */
const allPermutations = (s) => {
    if (s.length == 0 || s.length == 1) return s;
    return permutationsHelper([], s.split(''), []);
}

/**
 * Recursive helper for calculating all permutations. Will fix a character
 * and then recur to fix additional characters until all word possibilities are explored.
 * 
 * All calculations will be done with arrays, which we will join back into strings before printing final solution.
 */
const permutationsHelper = (word, remainder, solutionSet) => {
    if (remainder.length == 0) {
        solutionSet.push(word.join(''));
    } else {
        for (let i = 0; i < remainder.length; i++) {
            // Fix a character by removing i from remainder and adding to word
            let newRemainder = [...remainder];
            let removed = newRemainder.splice(i, 1);
            permutationsHelper(word.concat(removed), newRemainder, solutionSet);
        }
        return solutionSet;
    }
}

const allPermutations_driver = () => {
    assert.deepEqual(allPermutations("ABC"), [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]);
    assert.deepEqual(allPermutations("AB"), ["AB", "BA"]);
    console.log(allPermutations("123"));
}

allPermutations_driver();