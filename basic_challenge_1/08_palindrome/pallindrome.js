// function isPallindrome(str){
//     const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g,"")
//     let reverseStr = formatedStr.split("").reverse().join("")
//     return formatedStr === reverseStr
// }

function isPallindrome(str) {
    const formatStr = removeNonAlphaNumeric(str.toLowerCase())
    const reverstr = reverseString(formatStr)
    return formatStr === reverstr
}

function removeNonAlphaNumeric(str) {
    let formatStr = ""
    for (let i=0;i<str.length ;i++){
        const char = str[i]
        if(isAlphaNumeric(char)){
            formatStr += char
        }
    }
    return formatStr
}

function isAlphaNumeric(char){
  const code = char.charCodeAt(0)
  return (
    (code >=48 && code <= 57) ||  // Numbers 0-9
    (code >=97 && code <= 122)  // lowercase a-z
  )
}

function reverseString(str){
  let reversed = ""
  for(let i=str.length-1;i>=0;i--){
    reversed += str[i]
  }

  return reversed
}

module.exports = isPallindrome;