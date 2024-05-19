const findMissingLetter = require("./find_missing_letter")

test("finding missing letter",()=>{
    expect(findMissingLetter(["a","b","c","e","f"])).toBe("d")
    expect(findMissingLetter(["X","Z"])).toBe("Y")
})