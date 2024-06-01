const HashTable = require("./custom_hash_table")

const myHashTable = new HashTable()

const result = myHashTable._hash("John",myHashTable.limt)

myHashTable.set("John","555-234")
myHashTable.set("Sonu","555-432-876")
myHashTable.set("Vijay","555-123-903")

console.log(result);

myHashTable.printTable()