function removeDuplicate(arr){
   let uniqueArr = []

   for(let i=0;i<arr.length;i++){
     if(!uniqueArr.includes(arr[i])){
        uniqueArr.push(arr[i])
     }
   }

   return uniqueArr
}

// function removeDuplicate(arr){
//     return Array.from(new Set(arr))
// }

module.exports = removeDuplicate;