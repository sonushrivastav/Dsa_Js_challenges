const arraySum = require("./array_sum")

test("Calculate sum of array using recursion",()=>{
    expect(arraySum([3,2,1,4])).toEqual(9)
})