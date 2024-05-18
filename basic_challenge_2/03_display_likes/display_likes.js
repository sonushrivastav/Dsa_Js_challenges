function displayLikes(arr){
   const length = arr.length

   if(length === 0){
    return `no one likes this`
   }else if(length === 1){
    return `${arr[0]} likes this`
   }else if(length ===2 ){
    return `${arr[0]} and ${arr[1]} likes this`
   }else if(length ===3 ){
    return `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`
   }else{
    return `${arr[0]} ,${arr[1]} and ${length - 2} other likes this`
   }
}

module.exports = displayLikes;