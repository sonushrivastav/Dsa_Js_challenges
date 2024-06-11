const {LinkedList} = require("./linklist")

const list = new LinkedList()

list.add(100)
list.add(200)
list.add(300)
list.add(400)
list.add(500)

list.insertAt(2,"w");
list.removeFrom(1)

list.printAll()
// console.log(list.get(3));