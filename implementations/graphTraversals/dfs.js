const assert = require('assert');
const Graph = require('../dataStructures/graph');

const dfs = (g, root) => {
    if (g == null || root == null) return null;

    let seen = [];
    let toVisit = [root];
    let node = null;

    while (toVisit.length != 0) {
        node = toVisit.pop();
        let connections = Array.from(g.getConnections(node));
        for (let i = connections.length - 1; i >= 0; i--) {
            toVisit.push(connections[i]);
        }
        seen.push(node);
    }
    return seen.join(' -> ');
}

/**
 * Loads the Graph data structure and runs various tests on the main algorithm.
 */
const dfs_driver = () => {
    let g = new Graph(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);

    g.addEdge("A", "B");
    g.addEdge("A", "C");
    g.addEdge("A", "D");
    g.addEdge("B", "E");
    g.addEdge("E", "I");
    g.addEdge("C", "F");
    g.addEdge("C", "G");
    g.addEdge("F", "J");
    g.addEdge("D", "H");

    // Test cases
    assert(dfs(g, "A") == "A -> B -> E -> I -> C -> F -> J -> G -> D -> H");

    console.log("All tests passed.");
}

dfs_driver();