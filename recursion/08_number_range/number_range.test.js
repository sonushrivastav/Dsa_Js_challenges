const numberRange = require("./number_range")

test("Calulating range Numbers",()=>{
    expect(numberRange(1,5)).toEqual([1,2,3,4,5])
})