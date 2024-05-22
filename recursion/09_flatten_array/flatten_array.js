function flattenArray(array){
   let result = [];
   for(let item of array){
    if(Array.isArray(item)){
        result = result.concat(flattenArray(item))
    }else{
        result.push(item)
    }
   }
   return result;
}

module.exports = flattenArray