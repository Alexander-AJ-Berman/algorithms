const assert = require('assert');
const TreeNode = require('../dataStructures/binaryTree');

/**
 * Given a root, traverses a binary tree with a depth-first search.
 * 
 * Left -> Node -> Right
 */
const dfs = (root) => {
    if (root == null) return null;

    let seen = [];
    let toVisit = [root];
    let node = null;

    while (toVisit.length != 0) {
        node = toVisit.pop();
        if (node.right) toVisit.push(node.right);
        if (node.left) toVisit.push(node.left);
        
        seen.push(node.value);
    }
    return seen.join(' -> ');
}

/**
 * Sets up the tree structure and runs various tests on the main algorithm
 */
const dfs_driver = () => {
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

    assert((dfs(A) == "A"));

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
    assert(dfs(A) == "A -> B -> C -> D -> I -> H -> E -> F -> G");

    E.right = null;
    H.right = G;
    assert(dfs(A, []) == "A -> B -> C -> D -> I -> H -> G -> E -> F");
    console.log("All tests passed.");
}

dfs_driver();