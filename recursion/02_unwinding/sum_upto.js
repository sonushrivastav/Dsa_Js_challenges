function sumUpto(num){
   if(num === 1){
    console.log(`sumUpto(${num}) return 1`);
    return 1
   }

   console.log(`sumUpto(${num}) calls sumUpto(${num - 1}) + ${num}`);
   const result =  num + sumUpto(num - 1)
   console.log(`sumUpto(${num}) returns ${result}`);
   return result
}

module.exports = sumUpto