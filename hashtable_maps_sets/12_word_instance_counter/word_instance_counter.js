const HashTable = require("./hashtable")


function wordInstanceCounter(str,word){
   const words = str.toLowerCase().split(/\W+/)

   const wordFrequency = new HashTable()

   const targetWord = word.toLowerCase()
   let count = 0

   for(const currentword of words){
      if(currentword === "") continue

      if(wordFrequency.has(currentword)){
        wordFrequency.set(currentword,wordFrequency.get(currentword) + 1)
      }else{
        wordFrequency.set(currentword,1)
      }

      if(currentword === targetWord){
        count === wordFrequency.get(currentword)
      }
   }

   return count
}

module.exports = wordInstanceCounter