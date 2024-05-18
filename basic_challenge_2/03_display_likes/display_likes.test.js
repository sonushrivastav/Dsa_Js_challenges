const displayLikes = require("./display_likes")

test("Display Likes",()=>{
    expect(displayLikes([])).toEqual("no one likes this")
    expect(displayLikes(["peter"])).toEqual("peter likes this")
    expect(displayLikes(["peter","John","Jacob"])).toEqual("peter, John and Jacob likes this")
})