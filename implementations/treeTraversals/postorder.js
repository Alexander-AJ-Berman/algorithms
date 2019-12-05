const assert = require('assert');
const TreeNode = require('../dataStructures/binaryTreeNode');

/**
 * Given a root, traverses a binary tree along the postorder ordering.
 * 
 * Left -> Right -> Node
 */
const postorder = (root, visited) => {
    if (root == null) return null;

    // Traverse left subtree
    if (root.left != null) postorder(root.left, visited);
    // Traverse right subtree
    if (root.right != null) postorder(root.right, visited);
    
    // Visit root
    visited.push(root.value);

    return visited.join(' -> ');
}

/**
 * Sets up the tree structure and runs various tests on the main algorithm
 */
const postorder_driver = () => {
    // Instantiate tree nodes
    let [A, B, C, D, E, F, G] = [
        new TreeNode("A"),
        new TreeNode("B"),
        new TreeNode("C"),
        new TreeNode("D"),
        new TreeNode("E"),
        new TreeNode("F"),
        new TreeNode("G"),
    ];

    assert((postorder(A, []) == "A"));

    // Assign shape of binary tree
    A.left = B;
    B.left = C;
    C.left = D;
    A.right = E;
    E.left = F;
    E.right = G;

    // Test function
    assert(postorder(A, []) == "D -> C -> B -> F -> G -> E -> A");

    E.right = null;
    C.right = G;
    assert(postorder(A, []) == "D -> G -> C -> B -> F -> E -> A");
    console.log("All tests passed.");
}

postorder_driver();