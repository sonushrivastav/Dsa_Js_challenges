const hashtagGenerator = require("./hashtag_generator")

test("hashTag generator",()=>{
    expect(hashtagGenerator("hello there thanks for trying my kata")).toBe("#HelloThereThanksForTryingMyKata")
})