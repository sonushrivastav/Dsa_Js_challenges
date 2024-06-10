const Queue = require("./queue")
const Stack = require("./stack")

const isPallindromeQueueStack = (str)=>{
  const formatedStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
  
  const charQueue = new Queue()
  const charStack = new Stack()

  for(let i=0;i< formatedStr.length;i++){
    const char = formatedStr.charAt(i);

    charQueue.enqueue(char)
    charStack.push(char)
  }

   while(!charQueue.isEmpty()){
    if(charQueue.dequeue() !== charStack.pop()){
        return false
    }
   }
   return true
}



module.exports = isPallindromeQueueStack;