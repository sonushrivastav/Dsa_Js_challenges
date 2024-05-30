function longestConsequetive(nums){
  const newSet =  new Set(nums)

  let longestSequence = 0

  for(let num of newSet){
    if(!newSet.has(num-1)){
      let currentNum = num
    let sequence = 1

    while(newSet.has(currentNum+1)){
      sequence++
      currentNum++
    }
    longestSequence = Math.max(longestSequence,sequence)
}

  }
}

module.exports = longestConsequetive