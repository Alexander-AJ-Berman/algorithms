

/**
 * An implementation of the knapsack problem: given a list of items' values and weights,
 *  determine the optimal items to bring to maximize the value of a certain backpack with
 *  given max weight.
 */
const knapsack = (values, weights, w) => {
    return knapsackHelper(values, weights, w, 0, 0, w, []);
}  

/**
 * A helper recursive function for the problem. The index is the current index of the item we're considering adding
 *  to the knapsack, the value is the current value of the knapsack, c is the remaining weight.
 */
const knapsackHelper = (values, weights, w, index, v, c, solutions)  => {
    // Value has already been calculated
    if (index in solutions && c in solutions[index]) return solutions[index][c];

    // No more value can be added
    if (c <= 0 || index >= values.length) {
        if (!(index in solutions)) solutions[index] = [];
        solutions[index][c] = 0;
        return 0;
    }

    // Cannot fit this item, try the next one
    if (weights[index] > c) return knapsackHelper(values, weights, w, index + 1, v, c, solutions);

    // Recur on not taking item.
    let notTakingResult = knapsackHelper(values, weights, w, index + 1, v, c, solutions);
    // Recur on taking item.
    let takingResult = values[index] + knapsackHelper(values, weights, w, index + 1, v + values[index], c - weights[index], solutions);
    // Make the choice that leads to a higher value
    let solution = Math.max(notTakingResult, takingResult);
    // Store solution for this choice
    if (!(index in solutions)) solutions[index] = [];
    solutions[index][c] = solution;
    return solution;
}

// A driver to test the main algorithm.
const knapsack_driver = () => {
    console.log(knapsack([60,100,120,200,400,500], [10,20,30,50,70,80], 100));
}

knapsack_driver();