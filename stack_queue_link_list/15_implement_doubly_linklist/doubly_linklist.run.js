const DoublyLinkedLost = require("./doubly_linklist")

const list = new DoublyLinkedLost()

list.append(200)
list.append(300)
list.append(400)

list.prepend(100)

list.insertAt(2,"NEW")

console.log(list.get(1).data);

list.remove(2)

console.log(list.contains(200));

list.printAll()