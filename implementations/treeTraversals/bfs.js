const assert = require('assert');
const TreeNode = require('../dataStructures/binaryTreeNode');

/**
 * Given a root, traverses a binary tree level-by-level (bfs).
 */
const bfs = (root) => {
    if (root == null) return null;

    let seen = [];
    let toVisit = [root];
    let node = null;

    while (toVisit.length != 0) {
        node = toVisit.pop();
        if (node.left) toVisit.unshift(node.left);
        if (node.right) toVisit.unshift(node.right);
        seen.push(node.value);
    }
    return seen.join(' -> ');
}

/**
 * Sets up the tree structure and runs various tests on the main algorithm
 */
const bfs_driver = () => {
    // Instantiate tree nodes
    let [A, B, C, D, E, F, G, H, I] = [
        new TreeNode("A"),
        new TreeNode("B"),
        new TreeNode("C"),
        new TreeNode("D"),
        new TreeNode("E"),
        new TreeNode("F"),
        new TreeNode("G"),
        new TreeNode("H"),
        new TreeNode("I"),
    ];

    assert((bfs(A) == "A"));

    // Assign shape of binary tree
    A.left = B;
    B.left = C;
    B.right = H;
    C.right = I;
    C.left = D;
    A.right = E;
    E.left = F;
    E.right = G;


    // Test function
    assert(bfs(A) == "A -> B -> E -> C -> H -> F -> G -> D -> I");

    E.right = null;
    H.right = G;
    assert(bfs(A, []) == "A -> B -> E -> C -> H -> F -> D -> I -> G");
    console.log("All tests passed.");
}

bfs_driver();