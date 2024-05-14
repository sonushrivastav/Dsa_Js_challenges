const helloWorld = require("./hello_world")

test("Returning Hello world, as a string", ()=>{
    const result = helloWorld();
    expect(result).toBe('Hello World !!');
})