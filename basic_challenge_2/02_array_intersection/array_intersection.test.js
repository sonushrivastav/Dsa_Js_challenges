const arrayIntersection = require("./array_intersection")

test("Finding array intersection",()=>{
    expect(arrayIntersection([1,2,3,4,5],[3,4,5,6,7])).toEqual([
        3,4,5,
    ])
    expect(arrayIntersection([1,2,3],[4,5,6])).toEqual([])
})