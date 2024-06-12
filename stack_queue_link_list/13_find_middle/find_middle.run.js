const findMiddle = require("./find_middle")
const {LinkedList} = require("./linklist")


const list = new LinkedList()

list.add("a")
list.add("b")
list.add("c")
list.add("d")
list.add("e")
list.add("g")

const result = findMiddle(list)
console.log(result);