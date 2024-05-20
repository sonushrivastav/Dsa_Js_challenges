const validIpv4 = require("./valid_ipv4")

test("valid Ipv4 checks",()=>{
    expect(validIpv4('1.2.3.4')).toBe(true)
    expect(validIpv4('123.24.38.84')).toBe(true)
    expect(validIpv4('1.2.3.4.5')).toBe(false)
})