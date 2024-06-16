const { Node, BinarySearchTree } = require('./binarysearch_tree');


// Create a binary search tree:
//       10
//      /  \
//     5    15
//    /
//   2

const bst = new BinarySearchTree()


bst.insert(10)
bst.insert(15)
bst.insert(15)
bst.insert(2)

bst.remove(5)

bst.printTree()
console.log(bst.lookup(2));