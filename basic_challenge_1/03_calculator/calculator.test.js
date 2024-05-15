const calculator = require("./calculator")

test("performing arithmatic operations using the calculator",()=>{

  const num1 = 5
  const num2 = 8

  expect(calculator(num1,num2,"+")).toBe(13)
  expect(calculator(num1,num2,"-")).toBe(-3)
  expect(calculator(num1,num2,"*")).toBe(40)
  expect(calculator(num1,num2,"/")).toBe(0.625)

})