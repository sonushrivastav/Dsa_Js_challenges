const power = require("./power")

test("calculate power of base to exponent",()=>{
    expect(power(2,4)).toEqual(8)
    expect(power(5,2)).toEqual(25)
    expect(power(3,4)).toEqual(81)
})