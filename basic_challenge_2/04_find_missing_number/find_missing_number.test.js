const findMissingNumber = require("./find_missing_number")

test("Finding missing number",()=>{
    expect(findMissingNumber([1,2,4,5])).toBe(3)
    expect(findMissingNumber([1,3,4,5,6])).toBe(2)
    expect(findMissingNumber([10,8,6,7,5,4,2,3,1])).toBe(9)
})