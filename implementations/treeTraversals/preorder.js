const assert = require('assert');
const TreeNode = require('../dataStructures/binaryTree');

/**
 * Given a root, traverses a binary tree along the preorder ordering.
 * 
 * Node -> Left -> Right
 */
const preorder = (root, visited) => {
    if (root == null) return null;

    // Visit the root
    visited.push(root.value);

    // Traverse left subtree
    if (root.left != null) preorder(root.left, visited);
    // Traverse right subtree
    if (root.right != null) preorder(root.right, visited);

    return visited.join(' -> ');
}

/**
 * Sets up the tree structure and runs various tests on the main algorithm
 */
const preorder_driver = () => {
    // Instantiate tree nodes
    let [A, B, C, D, E, F, G, H, I, J] = [
        new TreeNode("A"),
        new TreeNode("B"),
        new TreeNode("C"),
        new TreeNode("D"),
        new TreeNode("E"),
        new TreeNode("F"),
        new TreeNode("G"),
        new TreeNode("H"),
        new TreeNode("I"),
        new TreeNode("J"),
    ];

    assert((preorder(A, []) == "A"));
    // Assign shape of binary tree
    A.left = B;
    A.right = C;
    B.left = D;
    C.left = E;
    E.left = G;
    C.right = F;
    F.left = H;
    F.right = I;

    // Test function
    assert(preorder(A, []) == "A -> B -> D -> C -> E -> G -> F -> H -> I");

    F.right = null;
    E.right = I;
    assert(preorder(A, []) == "A -> B -> D -> C -> E -> G -> I -> F -> H");
}

preorder_driver();