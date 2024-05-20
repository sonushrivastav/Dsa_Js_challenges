function hashtagGenerator(str){
     if(str.trim() === ""){
        return false
     }
    const words = str.trim().split(/\s+/)
    const capitalizeWords = words.map((word)=>{
       return word.charAt(0).toUpperCase() + word.slice(1)
    })

    const hashtag = "#" + capitalizeWords.join("")
    return hashtag.length > 140 ? false : hashtag
}

module.exports = hashtagGenerator;