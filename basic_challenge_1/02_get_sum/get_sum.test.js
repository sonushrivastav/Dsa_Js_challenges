const getSum = require("./get_sum")

test("Calculating the sum of the two number",()=>{
    const num1 = 5;
    const num2 = 10

    const result = getSum(num1, num2);
    expect(result).toBe(15)
})