const findMaxNumber = require("./find_max_number")

test("Finding maxNumber  in an array",()=>{
    expect(findMaxNumber([1,4,5,7,6])).toBe(7)
    expect(findMaxNumber([-3,-5,-1,0])).toBe(0)
    expect(findMaxNumber([1,10,15,27,16])).toBe(27)
})