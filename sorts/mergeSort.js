const assert = require('assert');

/**
 * An implementation of mergeSort. Will be tested with a driver function below.
 */
const mergeSort = (A) => {
    const n = A.length;
    // A single element list is already sorted
    if (n < 2) return A;
    // Store midpoint to split
    let middle = Math.floor(n / 2);
    // Split into two lists, fill left list
    let left = [];
    for (let i = 0; i < middle; i++) {
        left[i] = A[i];
    }
    // Fill right list
    let right = [];
    for (let i = middle; i < n; i++) {
        right[i - middle] = A[i];
    }
    mergeSort(left); // Sort left
    mergeSort(right); // Sort right
    merge(left, right, A); // Merge two sorted halves
    return A;
}

/**
 * Recursive helper for mergeSort to merge two sorted arrays
 */
const merge = (left, right, A) => {
    let i = 0; // To traverse left
    let j = 0; // To traverse right
    let k = 0; // To traverse A

    while (i < left.length && j < right.length) {
        // Left contains smaller value
        if (left[i] <= right[j]) {
            A[k] = left[i];
            i += 1;
        } 
        // Right contains smaller value
        else {
            A[k] = right[j];
            j += 1;
        }
        k += 1;
    }
    // Handle case in which left and right are of different lengths
    while (i < left.length) {
        A[k] = left[i];
        i += 1;
        k += 1;
    }
    while (j < right.length) {
        A[k] = right[j];
        j += 1;
        k += 1;
    }
}



const mergeSort_driver = () => {
    assert.deepEqual(mergeSort([1]), [1]);
    assert.deepEqual(mergeSort([3,0,1]), [0,1,3]);
    assert.deepEqual(mergeSort([2,4,1,6,8,5,3,7]), [1,2,3,4,5,6,7,8]);
    assert.deepEqual(mergeSort([-2,-1,6,-4,-7]), [-7,-4,-2,-1,6]);
    console.log("Test complete.");
}

mergeSort_driver();