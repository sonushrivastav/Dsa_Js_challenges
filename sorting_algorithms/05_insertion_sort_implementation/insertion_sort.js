function insertionSort(arr){
  for(let i = 1 ; i<arr.length;i++){

    const currentElem = arr[i]
    let j = i-1

    while(j>=0 && arr[j] > currentElem){
        arr[j+1] = arr[j]
        j--
    }

    arr[j + 1] = currentElem
  }

  return arr
}

module.exports  = insertionSort