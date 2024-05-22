const permutation = require("./permutations")

test("permutation of string ",()=>{
    expect(permutation("abc")).toEqual([
        "abc","acb","bac","bca","cab","cba"
    ])
})