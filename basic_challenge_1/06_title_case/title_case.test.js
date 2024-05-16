const titleCase = require("./title_case")

test("COnverting string to title case",()=>{
    expect(titleCase("hello world")).toBe("Hello World")
    expect(titleCase("the quick brown fox")).toBe("The Quick Brown Fox")
    expect(titleCase("sHoRt AnD sToUt")).toBe("Short And Stout")
})