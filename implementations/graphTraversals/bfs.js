const assert = require('assert');
const Graph = require('../dataStructures/graph');

const bfs = (g, root) => {
    let seen = [];
    let visitPath = [];

    visitPath.push(root);

    let node = root;

    while (visitPath.length > 0) {
        // Visit next node in list
        node = visitPath.pop();
        // Add children of current node to queue
        let children = Array.from(g.getConnections(node));
        for (let i = 0; i < children.length; i++) {
            visitPath.unshift(children[i]);
        }
        // Mark node as seen
        seen.push(node);
    }
    return seen;
}

/**
 * Sets up the graph structure and runs various tests on the main algorithm.
 */
const bfs_driver = () => {
    // Instantiate graph and set initial structure
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

    console.log(bfs(g, "A"));
}

bfs_driver();