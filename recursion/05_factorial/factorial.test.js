const factorial = require("./factorial")

test("Factorial of number",()=>{
    expect(factorial(0)).toBe(1)
    expect(factorial(5)).toBe(120)
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
})