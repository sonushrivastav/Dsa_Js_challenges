const wordInstanceCounter = require("./word_instance_counter")

const result = wordInstanceCounter(
    "The quick brown fox jumps over the lazy dog",
    "the"
)

console.log(result);