const countOccurrences = require("./count_occurance")

test("Count occurances of a charactors",()=>{
    expect(countOccurrences("hello","l")).toBe(2)
    expect(countOccurrences("programming","m")).toBe(2)
    expect(countOccurrences("banana","a")).toBe(3)
    
})