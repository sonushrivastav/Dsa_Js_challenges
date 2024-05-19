const validEmail = require("./valid_email")

test("Valid Email address",()=>{
    expect(validEmail("john123@gmail.com")).toBe(true)
    expect(validEmail("@gmail.com")).toBe(false)
    expect(validEmail("user@domain")).toBe(false)
})