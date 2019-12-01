const assert = require('assert');

/**
 * Performs a binary search on the given (sorted) array to locate the element n in
 *  O(log n) time.
 */
const binarySearch = (arr, left, right, n) => {
    if (arr.length == 0) return null;
    if (left > right) return -1;

    // Calculate midpoint of array
    let mid = Math.floor((left + right) / 2);

    // Element found
    if (arr[mid] == n) {
        return mid;
    }
    // Element present in subarray left of mid
    else if(arr[mid] > n) {
        return binarySearch(arr, 0, mid - 1, n);
    } 
    // Element present in subarray right of mid
    else {
        return binarySearch(arr, mid + 1, right, n);
    }
}

const binarySearch_driver = () => {
    // Null-check input test cases
    assert(binarySearch([], 0, 0, 0) == null);

    // General test cases
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 1) == 0);
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 3) == 1);
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 5) == 2);
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 6) == 3);
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 7) == 4);
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 10) == 5);
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 20) == 6);
    assert(binarySearch([1,3,5,6,7,10,20], 0, 6, 2) == -1);

    // Special test cases
    assert(binarySearch([1], 0, 1, 1) == 0);
    assert(binarySearch([1, 1, 1], 0, 1, 1) == 0);
}

binarySearch_driver();