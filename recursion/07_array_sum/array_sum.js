function arrSum(num){
  if(num.length === 0){
    return 0
  }


  return num[0] + arrSum(num.slice(1))
}

module.exports = arrSum