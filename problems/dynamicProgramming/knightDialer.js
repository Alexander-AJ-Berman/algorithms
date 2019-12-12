const assert = require('assert');

/**
 * Given number of hops N, determine how many unique combinations of numbers can
 *  be formed when the night is placed on any individual number. Put another way,
 *  sum the number of combinations of hops for each possible initial landing.
 * 
 * The brute force solution, called with knightDialerBrute, recursively generates
 *  all possible combinations of dials, storing them with each generation. The runtime of
 *  this algorithm is O(m^n), where m is the maximum number of neighbors for a number and n
 *  is the passed in number of hops. O(3^n) in this case, where we're dealing with a standard
 *  dialpad.
 * 
 * Observing the recurrence relation that N = sum(N-1) for all dial numbers, we can use dynamic
 *  programming to iterate upwards through hops. Using the previous hop counts, we can simply add
 *  the number of possible neighbors for each number as the unique combinations added for that N. 
 *  In that way, we can actually reduce the runtime of this algorithm to O(n), which is a drastic
 *  improvement!
 */
const knightDialerBrute = (N) => {
    if (N == 0) return 0;

    let neighborMap = {
        '0': ['4', '6'],
        '1': ['6', '8'],
        '2': ['7', '9'],
        '3': ['4', '8'],
        '4': ['0', '3', '9'],
        '5': [],
        '6': ['0', '1', '7'],
        '7': ['2', '6'],
        '8': ['1', '3'],
        '9': ['2', '4'],
    }

    let nums = Object.keys(neighborMap);
    let totalCombinations = 0;
    for (let i = 0; i < nums.length; i++) {
        totalCombinations += knightDialerHelper(nums[i], N - 1, neighborMap, 0);
    }
    return totalCombinations;
}

const knightDialerHelper = (num, N, neighborMap, currentCombinations) => {
    // No hops left, this is the combination
    if (N == 0) return 1;

    // For each valid move, add an additional combination
    let neighbors = neighborMap[num];
    let solution = 0;
    for (let i = 0; i < neighbors.length; i++) {
        currentCombinations = knightDialerHelper(neighbors[i], N - 1, neighborMap, currentCombinations);
        // Sum valid combinations for each neighbor
        solution += currentCombinations;
    }

    // Return total for this iteration's neighbors
    return solution;
}

const knightDialer = (N) => {
    if (N == 0) return 0;

    let neighborMap = {
        '0': ['4', '6'],
        '1': ['6', '8'],
        '2': ['7', '9'],
        '3': ['4', '8'],
        '4': ['0', '3', '9'],
        '5': [],
        '6': ['0', '1', '7'],
        '7': ['2', '6'],
        '8': ['1', '3'],
        '9': ['2', '4'],
    }

    // Instantiate count holder
    let comboCount = new Array(10).fill(1);

    // Sum over N - 1 times
    for (let i = 0; i < N - 1; i++) {
        let newCount = new Array(10).fill(0);
        // For each number in the dialpad
        let dialPadNums = Object.keys(neighborMap);
        for (let j = 0; j < dialPadNums.length; j++) {
            // For each neighbor
            let neighbors = neighborMap[dialPadNums[j]];
            for (let k = 0; k < neighbors.length; k++) {
                // New count is the sum of old count for all neighbors
                newCount[j] += comboCount[Number(neighbors[k])];
            }
        }
        comboCount = newCount;
    }

    // Sum final results
    let totalCombinations = 0;
    for (let i = 0; i < comboCount.length; i++) {
        totalCombinations += comboCount[i];
    }
    return totalCombinations;
}

// A driver to test the main algorithm.
const knightDialerDriver = () => {
    assert(knightDialer(1) == 10);
    assert(knightDialer(2) == 20);
    assert(knightDialer(3) == 46);
    assert(knightDialer(4) == 104);
}

knightDialerDriver();