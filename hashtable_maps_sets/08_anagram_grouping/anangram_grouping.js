function anagramGrouping(words){
    const anagramsGroup = new Map()

    for(const word of words){
        const sortedChars = word.split("").sort().join("")
        if(anagramsGroup.has(sortedChars)){
            anagramsGroup.get(sortedChars).push(word)
        }else{
         anagramsGroup.set(sortedChars,[word])
        }
    }
    return Array.from(anagramsGroup.values())
}

module.exports = anagramGrouping