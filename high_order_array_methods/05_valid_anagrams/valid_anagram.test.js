const validAnagram = require("./valid_anagram");

test("Checking valid Anagram", () => {
  expect(validAnagram('listen',"silent")).toBe(true);
  // expect(validAnagram('hello',"world")).toBe(false);
});
 
