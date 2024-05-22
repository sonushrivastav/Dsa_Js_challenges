const reverseString = require("./reverse_string")

test("Reverse string",()=>{
    expect(reverseString("Hello")).toBe("olleH")
    expect(reverseString("12345")).toBe("54321")
})