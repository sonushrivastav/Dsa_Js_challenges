const countVowels = require("./count_vowels")

test("counting vowels in a string",()=>{
    expect(countVowels("Hello, world!")).toBe(3)
    expect(countVowels("Javascript")).toBe(3)
    expect(countVowels("coding challenge")).toBe(5)
})