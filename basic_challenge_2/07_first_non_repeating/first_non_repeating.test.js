const firstNonRepeating = require("./first_non_repeating")

test("finst first non repeating charactor",()=>{
    expect(firstNonRepeating("aabcdde")).toBe("b")
    expect(firstNonRepeating("aabbcde")).toBe("c")
    expect(firstNonRepeating("aabbccdd")).toBe(null)
    expect(firstNonRepeating("hello world")).toBe("h")
})