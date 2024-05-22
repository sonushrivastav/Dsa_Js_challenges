function permutation(str){
   let result = []

   if(str.length === 0){
    result.push("")
    return result
   }

   for(let i=0;i<str.length;i++){
    const firstChar = str[i]   
    let restOfString = str.slice(0,i) + str.slice(i+1)
    let subpermutations = permutation(restOfString)
     

    for(let j=0; j< subpermutations.length ;j++){
        result.push(firstChar + subpermutations[j])
    }
   }
   return result
}

module.exports = permutation