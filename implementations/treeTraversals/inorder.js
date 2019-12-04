const assert = require('assert');
const TreeNode = require('../dataStructures/binaryTree');

/**
 * Given a root, traverses a binary tree along the inorder ordering.
 * 
 * Left -> Node -> Right
 */
const inorder = (root, visited) => {
    if (root == null) return null;

    if (root.left != null) inorder(root.left, visited);
    visited.push(root.value);
    if (root.right != null) inorder(root.right, visited);

    return visited.join(' -> ');
}

/**
 * Sets up the tree structure and runs various tests on the main algorithm
 */
const inorder_driver = () => {
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

    assert((inorder(A, []) == "A"));

    // Assign shape of binary tree
    A.left = B;
    B.left = C;
    C.left = D;
    A.right = E;
    E.left = F;
    E.right = G;


    // Test function
    assert(inorder(A, []) == "D -> C -> B -> A -> F -> E -> G");

    E.right = null;
    C.right = G;
    assert(inorder(A, []) == "D -> C -> G -> B -> A -> F -> E");
}

inorder_driver();