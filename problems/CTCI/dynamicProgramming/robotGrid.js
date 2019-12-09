const assert = require('assert');

/**
 * Design a path for a robot from the top left of a r x c grid
 *  to the bottom right. The robot can only move right and down.
 *  Cells within the offLimits array may not be traversed.
 * 
 * To devise a brute force solution, we begin at the end of the maze, 
 *  recursively working our way backwards until we run out of possible moves
 *  or reach the beginning of the maze. Then, we can simply reverse and return
 *  the successfull path.
 */
const robotGrid = (row, col, rows, cols, offLimits, path, visited) => {
    
    // Add first space to path
    if (row == rows - 1 && col == cols - 1) path.push([rows - 1, cols - 1]);
    
    // Correctly reached start space
    if (path[path.length - 1][0] == 0 && path[path.length - 1][1] == 0) return path.reverse();

    // Explore left move if possible
    if (col > 0 && !offLimits.has(JSON.stringify([row, col - 1]))) {
        // Check against list of already visited cells
        if (!visited.has(JSON.stringify([row, col - 1]))) {
            // Add to path
            path.push([row, col - 1]);
            // Add to visited
            visited.add(JSON.stringify([row, col - 1]))
            return robotGrid(row, col - 1, rows, cols, offLimits, path, visited);
        }
    }

    // Explore upwards move if possible
    if (row > 0 && !offLimits.has(JSON.stringify([row - 1, col]))) {
        // Check against list of already visited cells
        if (!visited.has(JSON.stringify([row - 1, col]))) {
            // Add to path
            path.push([row - 1, col]);
            // Add to visited
            visited.add(JSON.stringify([row - 1, col]))
            return robotGrid(row - 1, col, rows, cols, offLimits, path, visited);
        }
    }

    // No path found
    return -1;
}

// Driver function to test the main algorithm
const robotGrid_driver = () => {
    let offLimits = new Set();
    offLimits.add(JSON.stringify([1,1]));
    offLimits.add(JSON.stringify([2,2]));
    offLimits.add(JSON.stringify([0,1]));
    let path = robotGrid(3, 3, 4, 4, offLimits, [], new Set());
    console.log(path);
}

robotGrid_driver();