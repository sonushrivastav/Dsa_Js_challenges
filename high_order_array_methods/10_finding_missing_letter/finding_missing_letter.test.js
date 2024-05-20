const findmissingletter = require("./finding_missing_letter")

test("find missing letter from an array",()=>{
    expect(findmissingletter(["a","b","d","e","f"])).toBe("c")
    expect(findmissingletter(["m","n","o","p","r"])).toBe("q")
})