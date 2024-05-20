function validAnagram(str1,str2){
  const freqCount1 = str1.split("").reduce((acc,char)=>{
    return acc[char] = (acc[char] || 0) + 1
  },{})

  const freqCount2 = str2.split("").reduce((acc,char)=>{
    return acc[char] = (acc[char] || 0) + 1
  },{}) 

  return Object.keys(freqCount1).every((char)=>freqCount1[char] === freqCount2[char])
}



module.exports = validAnagram