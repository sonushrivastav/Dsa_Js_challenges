const nameMap = new Map([
    [1,"John"],
    [2,"Jack"],
    [3,"Jill"],
    [4,"Julie"],
])


const myFunction = ()=>{}

const myObj = {}
const map2 = new Map([
    ["name","John"],
    [1,"number one"],
    [true,"relly true"],
    [null,null],
    [myFunction,"my function"],
    [myObj,"my object"]
])
// get values
console.log(map2.get("name"));


// set values
nameMap.set(5,"Sara")
console.log(nameMap);

//check values
console.log(nameMap.has(1));
console.log(nameMap.has(18));

//delete values
nameMap.delete(1)
console.log(nameMap.has(1));

//get Size
console.log(nameMap.size);

// Iterating over a map
for(let [key,value] of nameMap){
    console.log(key,value);
}

// for each
nameMap.forEach((value,key)=> console.log(key,value))

//get values
console.log(nameMap.keys());

//clear map
nameMap.clear()
console.log(nameMap.size);