function findmissingletter(numbers){
   let start = numbers[0].charCodeAt(0)
   const missingCharcode = numbers.map((char)=> char.charCodeAt(0))
   .find((current)=>{
    if(current - start > 1){
        return true
    }
    start = current
    return false
   })

   return missingCharcode ? String.fromCharCode(missingCharcode -1 ) : ""

}

module.exports = findmissingletter;