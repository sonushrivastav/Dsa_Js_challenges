function countDown(num){
   //Base case

   if(num <=0){
    console.log("All done!");
    return;
   }

   //recursion Case
   console.log(num);
   num--
   countDown(num)

}

module.exports = countDown