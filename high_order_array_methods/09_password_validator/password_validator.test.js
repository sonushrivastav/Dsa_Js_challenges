const passwordValidator = require("./password_validator")

test("valid password",()=>{
    expect(passwordValidator("Abc12345")).toBe(true)
    expect(passwordValidator("HelloWorld")).toBe(false)
    expect(passwordValidator("Pass")).toBe(false)
})