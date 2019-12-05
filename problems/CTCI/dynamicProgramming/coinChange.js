const assert = require('assert');

/**
 * Calculates the number of unique ways to make n cents given an unlimited number of quarters, 
 *  dimes, nickels, and pennies.
 * 
 */
const coinChange = (n, coinList, index, stored) => {
    if (n in stored && index in stored[n]) return stored[n][index];

    if (n < 0) return 0;
    if (n == 0) return 1;

    // Not a valid solution
    if (index >= coinList.length) return 0;

    let solution = coinChange(n - coinList[index], coinList, index, stored) + coinChange(n, coinList, index + 1, stored);

    // Store calculated solution
    if (!(n in stored)) stored[n] = [];
    stored[n][index] = solution;

    return solution;
}

// Driver code to test the main algorithm
const coinChange_driver = () => {
    assert(coinChange(10, [1,5,10,25], 0, {}) == 4);
    assert(coinChange(100, [1,5,10,25], 0, {}) == 242);
    assert(coinChange(106, [1,5,10,25], 0, {}) == 273);
    assert(coinChange(1000, [1,5,10,25], 0, {}) == 142511);
}

coinChange_driver();