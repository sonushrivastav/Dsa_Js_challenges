/*
Quadratic time O(n^2)
Quadratic time means that the required to complete a function is proportional to the square of the input data set
*/


function sumArray(arr){
    let sum = 0
    let sum2 = 0

    for(let i=0;i<arr.length;i++){
        sum += arr[i]
        for(let j=0;j<arr.length;j++){
            sum2 += arr[j]
        }
    }

    return sum + sum2
}

const arr1 = [1,2,3,4,5]
console.time(`sum array 1`);
console.log(sumArray(arr1));
console.timeEnd(`sum array 1`);


const arr2 = Array.from({length:1000000},(_,index)=> index + 1)
console.time(`sum array 1`)
console.log(sumArray(arr2));
console.timeEnd(`sum array 1`)

