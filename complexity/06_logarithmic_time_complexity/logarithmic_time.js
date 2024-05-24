/* 

Logarithmic Time (O(log n))

logarithmic time means that the time required to complete  a function is proportional to the logarithm of the input data set

*/


function findPower(base,exponent){

    if(exponent === 0){
        return 1
    }


    if(exponent % 2 === 0){
        const halfpower = findPower(base, exponent /2)
        return halfpower * halfpower
    }
    else{
        const halfpower = findPower(base,(exponent - 1) / 2)
        return base * halfpower * halfpower
    }
}

console.time("find power 1")
findPower(2,100)
console.timeEnd(`find power 1`)


console.time(`find power 2`)
findPower(2,1000000)
console.timeEnd(`find power 2`)

