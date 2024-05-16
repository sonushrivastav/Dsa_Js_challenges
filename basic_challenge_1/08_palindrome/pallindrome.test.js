const isPallindrome = require("./pallindrome")

test("Checking for pallindrome String",()=>{
    expect(isPallindrome("racecar")).toBe(true)
    expect(isPallindrome("Hello")).toBe(false)
    expect(isPallindrome("madam")).toBe(true)
})