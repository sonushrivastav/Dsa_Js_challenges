const TreeNode = require("./tree_node_class")

const a = new TreeNode("a")
const b = new TreeNode("b")
const c = new TreeNode("c")
const d = new TreeNode("d")
const e = new TreeNode("e")
const f = new TreeNode("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(a);