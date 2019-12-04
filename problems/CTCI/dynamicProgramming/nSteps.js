const assert = require('assert');
/**
 * Calculate the number of possible ways someone can climb to the nth step with 
 *  movement options 1, 2, & 3.
 * 
 * Initially solved with recursion, this function will give O(3^n) runtime, however 
 *  this can be reduced to O(n) with dynamic programming.
 */
const nSteps = (n) => {
    let solution = [];
    solution[0] = 1;
    solution[1] = 1;
    solution[2] = 2;

    for (let i = 3; i < n + 1; i++) {
        solution[i] = solution[i - 1] + solution[i - 2] + solution[i - 3];
    }
    return solution[n];
}

// Sets up and executes test cases
const nSteps_driver = () => {
    assert(nSteps(0) == 1);
    assert(nSteps(1) == 1);
    assert(nSteps(3) == 4);
    assert(nSteps(30) == 53798080);
}

nSteps_driver();