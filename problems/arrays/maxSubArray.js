
/**
 * Calculates the maximum value of a subarray of length k for the given array.
 */
const maxSubArray = (arr, k) => {
    if (k < 1 || Number(k) != k) return 0;
    if (arr.length < k) return 0;

    let windowSum = 0;
    // Precalculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;
    let currentSum = windowSum;
    // Slide window, removing first and adding next element at each index
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        if (currentSum > maxSum) maxSum = currentSum;
    }
    return maxSum; 
}

const maxSubArray_driver = () => {
    console.log(maxSubArray([100, 200, 300, 400], 2));
}

maxSubArray_driver();