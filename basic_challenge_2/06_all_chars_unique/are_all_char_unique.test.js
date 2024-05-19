const areAllCharUnique = require("./are_all_char_unique")

test("Are all charactor unique from given string",()=>{
    expect(areAllCharUnique("abcdef")).toBe(true)
    expect(areAllCharUnique("programming")).toBe(false)
    expect(areAllCharUnique("abcdefAi")).toBe(true)
})