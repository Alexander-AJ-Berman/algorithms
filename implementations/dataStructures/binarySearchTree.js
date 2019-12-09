const Node = require('./binaryTreeNode');

/**
 * An implementation of a binary search tree. Every node is greater than or equal to the node
 *  on it's left, and less than or equal to the node on it's right.
 * 
 * Duplicate values are permitted.
 */
class BinarySearchTree {
    // Takes in a list of values to insert into the tree
    constructor(values) {
        if (values[0]) this.root = new Node(values[0])
        // for (let i = 1; i < values.length; i++) {
        //     this.insert(values[i]);
        // }
    }
    // Inserts a new node into the BST, maintaining equality rules - O(?)
    insert() {

    }
    // Removes a node from the BST - O(?)
    remove() {

    }
    // Searches for a value in the tree. Returns true if found, false otherwise 
    // Runtime O(h) where h is the tree's height
    search(value) {  
        let node = this.root;
        // Search until end of tree is found
        while(node.left || node.right) {
            // Traverse left subtree
            if (node.left && value < node.value) {
                node = node.left;
            }
            // Traverse right subtree
            if (node.right && value > node.value) {
                node = node.right;
            }
            // Check if value has been found
            if (node.value == value) return true;
        }
        return false;
    }
}


let BST = new BinarySearchTree([10]);
let root = BST.root;
root.left = new Node(8);
root.right = new Node(20);
root.left.left = new Node(6);
root.left.right = new Node(9);
root.left.left.left = new Node(3);
root.right.left = new Node(18);
root.right.right = new Node(25);

console.log(BST.search(18));

module.exports = BinarySearchTree;