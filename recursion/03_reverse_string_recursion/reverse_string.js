function reverseString(str){
  if(str === ""){
    return ""
  }

  console.log(str.substr(1));
  return reverseString(str.substr(1)) + str.charAt(0)
}

module.exports = reverseString