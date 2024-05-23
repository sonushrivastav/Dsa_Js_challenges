/* 
Linear Time O(n)

Linear time  menas that the time required to complete a function  is directly proportional to the size of the input data set

*/

function sumArray(arr){
    let sum = 0

    for(let i=0; i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}

let arr1 = [1,2,3,4,5]
console.time("sum array 1")
console.log(sumArray(arr1));
console.timeEnd("sum array 1")      


const arr2 = Array.from({length:100000},(_,index)=> index + 1)
console.time("sum array 2")
console.log(sumArray(arr2));
console.timeEnd("sum array 2")  