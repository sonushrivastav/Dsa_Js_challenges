function firstNonRepeating(str){
  const charCOunt = {}

   for(const char of str){
    charCOunt[char] = (charCOunt[char] || 0) + 1
   }


   for( const char of str){
    if(charCOunt[char] === 1){
        return char
    }
   }

   return null
}

module.exports =  firstNonRepeating