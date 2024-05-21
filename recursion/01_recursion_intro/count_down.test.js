const countDown = require("./count_down")

test("Coundown",()=>{
    expect(countDown(10)).toBe(10,9,8,7,6,5,4,3,2,1,"All done!")
})