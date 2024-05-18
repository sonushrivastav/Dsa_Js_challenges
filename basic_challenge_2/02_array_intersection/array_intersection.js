// function arrayIntersection(arr1,arr2){
//    let intersectArr  = []

//    for(let i=0;i<=arr1.length;i++){
//     if(arr2.includes(arr1[i])  && !intersectArr.includes(arr1)){
//       intersectArr.push(arr1[i])        
//     }
//    }

//    return intersectArr
// }

function arrayIntersection(arr1,arr2){
    let set = new Set(arr1)

    let intersectArr = []

    for(let num of arr2){
        if(set.has(num)){
            intersectArr.push(num)
        }
    }

    return intersectArr
}

module.exports = arrayIntersection