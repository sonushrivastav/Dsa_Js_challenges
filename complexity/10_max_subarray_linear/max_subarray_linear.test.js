const maxSubArraySum = require("./max_subarray_linear")

test("finding maxsubarraySum",()=>{
    const arr1 = [2,5,3,1,11,7,6,4]
    const k1 = 3
    expect(maxSubArraySum(arr1,k1)).toBe(24)
})