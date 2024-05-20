function sumOfEvenSquare(numbers){
   const result = numbers.filter((num)=> num % 2 ===0)
   .map(num => num **2)
   .reduce((sum,square)=> sum + square,0)

   return result
}

module.exports =  sumOfEvenSquare