const assert = require('assert');

/**
 * Calculates the maximum value of a contiguous subarray for the given array.
 * 
 * The naive approach yields O(n^3) runtime, which is reduced to O(n^2) by utilizing the 
 *  sliding window pattern.
 * 
 * Dynamic programming allows us to reach an O(n) solution.
 */
const maxContiguousSubarray = (nums) => {
    // Null-check input
    if (nums.length == 0) return null;

    let maxSum = nums[0];
    let previousSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        // Stop subarray at i
        if (nums[i] > previousSum + nums[i]) {
            previousSum = nums[i];
        } 
        // Continue subarray at i
        else {
            previousSum += nums[i];
        }

        // Check if we have increased our current max
        if (previousSum > maxSum) maxSum = previousSum;
    }
    return maxSum;
}

const maxContiguousSubarray_driver = () => {
    console.log(maxContiguousSubarray([-2,1,-3,4,-1,2,1,-5,4]));
}

maxContiguousSubarray_driver();