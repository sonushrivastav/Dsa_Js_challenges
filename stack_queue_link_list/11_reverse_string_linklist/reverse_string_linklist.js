const {LinkedList} = require("./linklist")


function reverseStringLinklist(str){
  const list = new LinkedList()

  for(let i=str.length -1; i>=0;i--){
    list.add(str[i]);
  }

  let reveredString = ""

  let current  = list.head

  while(current !== null){
    reveredString += current.data
    current = current.next
  }

  return   reveredString
}

module.exports = reverseStringLinklist