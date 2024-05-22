const flattenArray = require("./flatten_array")

test("Flatten Nested aRRAY",()=>{
    expect(flattenArray([1,2,[4,5],[4,[9,7],4]])).toEqual([1,2,4,5,4,9,7,4])
})