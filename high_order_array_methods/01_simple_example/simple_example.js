const numbers = [1,2,3,4,5]

// map : transform array elements with a provided function, creating new array

const doubleNumbers = numbers.map((num,index,arr)=> {
     return num * 2
})

// filter : creates new  array with elements that satisfy a specified condition

const evenNumbers = numbers.filter((num)=>{
    return num % 2 === 0
})

// reduce : executes a reducer function (that you provide) on each element of the array, resulting in a single output value

const sum = numbers.reduce((acc,sum)=>{
    return acc + sum
},0)


// forEach : Iterates through array elements and applies a function without creating a new array

numbers.forEach((num)=>{
    // console.log(num);
})

// find : return the first array element that satisfies a specified condition 

const foundNumber = numbers.find((num)=> num >2)


// some : Checks if at least one array element satisfies a condition 

const hsaEvenNumber = numbers.some((num)=>{
    return num > 2
})

// every : checks if all array elemnts satisfy a condition

const allNumberGreaterThanZero = numbers.every((num)=>{
    return num > 1
})

console.log("ffdsdds",allNumberGreaterThanZero);