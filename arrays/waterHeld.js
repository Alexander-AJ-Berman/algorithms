const assert = require('assert');

/**
 * Given a structure represented by an array of heights, determine how 
 *  much water can be held.
 */
const determineWater = (arr) => {
    // Need at least 3 elements to make a valid container
    if (arr.length < 3) return 0;

    let leftHighest = 0;
    let rightHighest = 0;
    // For each index, the first element is the height of the highest left
    //  and the second is the height of the highest right
    let heightArray = [];

    // Precompute left highest for each index
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > leftHighest) leftHighest = arr[i];
        heightArray.push([leftHighest, 0]);
    }

    // Precompute right highest for each index
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > rightHighest) rightHighest = arr[i];
        heightArray[i][1] = rightHighest;
    }

    let totalWater = 0;
    // Loop through each index and calculate water held
    for (let i = 0; i < arr.length; i++) {
        let waterOfIndex = Math.min(heightArray[i][0], heightArray[i][1]) - arr[i];
        if (waterOfIndex > 0) totalWater += waterOfIndex;
    }
    return totalWater;
}

const determineWater_driver = () => {
    assert.deepEqual(determineWater([1]), 0); 
    assert.deepEqual(determineWater([3,0]), 0); 
    assert.deepEqual(determineWater([0,3,3,4,0,1]), 1); 
    assert.deepEqual(determineWater([3,0,0,2,0,4]), 10);
    console.log("All tests pass.");
}

determineWater_driver();