const nameSet = new Set(["john","jane"])

// add to set
nameSet.add("jill")
nameSet.add("joe")

// check values
console.log(nameSet.has("john"));
console.log(nameSet.has("jsds"));

// get size
console.log(nameSet.size);

// get values
console.log(nameSet.values());

for(const name of nameSet){
    console.log(name);
}

// convert to array
const nameArray = [...nameSet]

console.log( nameArray);

// clear set
nameSet.clear()
console.log(nameSet.size);