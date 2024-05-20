const highestScoringWord = require("./highest_scoring_word")

test("finding the highest scoring word",()=>{
    expect(highestScoringWord("hello my name is xavior")).toBe("xavior")
    expect(highestScoringWord("take me to semynak")).toBe("semynak")
})