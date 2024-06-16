class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


class BinarySearchTree{
    constructor(){
        this.root = null
    }

   // Insert a new node into the tree

  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the tree is empty, set the root node to be the new node
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Start at the root
      let currentNode = this.root;

      // Loop until we find a node without a left or right child
      while (true) {
        // If the new value is less than the current node's value, go left
        if (value < currentNode.value) {
          // If there's no left child already there, add the new node here
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // Otherwise, move on to the left child and repeat the process
          currentNode = currentNode.left;
        } else {
          // If the new value is greater than or equal to the current node's value, go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          // Otherwise, move on to the right child and repeat the process
          currentNode = currentNode.right;
        }
      }
    }
  }

  printTree() {
    // In-order traversal
    const printNode = (node) => {
      // Base case: if the node is null, we've reached the end of the tree
      if (node === null) {
        return;
      }
      // Recursively print the left subtree, then the current node, then the right subtree
      printNode(node.left);
      console.log(node.value);
      printNode(node.right);
    };

    // Start at the root
    printNode(this.root);
  }
}

module.exports  = {
    Node, BinarySearchTree
}