const Queue = require("./queue")

const queue = new Queue()

queue.enqueue("a")
queue.enqueue("b")
queue.enqueue("c")

queue.dequeue()

console.log(queue.peek());