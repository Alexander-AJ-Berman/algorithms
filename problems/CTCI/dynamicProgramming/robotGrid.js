const assert = require('assert');

/**
 * Design a path for a robot from the top left of a r x c grid
 *  to the bottom right. The robot can only move right and down.
 *  Cells within the offLimits array may not be traversed.
 */
const robotGrid = (row, col, rows, cols, offLimits, path) => {
    console.log(row, col);
    // Robot has attempted to traverse an offLimits space
    if (offLimits.includes([row, col])) return;
    // Robot has attempted to move out of bounds
    if (row >= rows || col >= cols) return;
    // Visit space
    path.push([row, col]);
    // Robot has solved the maze
    if (path[path.length - 1][0] == rows - 1 && path[path.length - 1][1] == cols - 1) {
        console.log("yo");
        return path;
    }

    // Explore right path
    robotGrid(row, col + 1, rows, cols, offLimits, path);
    // Explore down path
    robotGrid(row + 1, col, rows, cols, offLimits, path);

    return path;
}

// Driver function to test the main algorithm
const robotGrid_driver = () => {
    console.log(robotGrid(0, 0, 5, 5, [[1,1], [2,2], [3,3]], []));
}

robotGrid_driver();