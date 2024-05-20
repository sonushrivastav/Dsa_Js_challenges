const sumOfEvenSquare  = require("./sum_of_even_square")

test("Sum of even Sqares",()=>{
    expect(sumOfEvenSquare([1,2,3,4,5])).toBe(20)
    expect(sumOfEvenSquare([])).toBe(0)
})