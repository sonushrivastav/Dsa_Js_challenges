/*
Space complexity O(1)
Time complexity O(1)
*/

function add(num1, num2){
    return num1 + num2
}


/*
Space complexity O(n)
Time complexity O(n)
*/

function createArray(num){
    const arr = []
    for(let i=0;i<num;i++){
        arr.push(i)
    }

    return arr
}


/*
Space complexity O(n^2)
Time complexity O(n^2)
*/

function createMatrix(num){
    const matrix = []
    for(let i = 0; i<num; i++){
        matrix[i] = []

        for(let j=0; j<num;j++){
            matrix[i][j] = i + j
        }
    }

    return matrix
}

/*
Space complexity O(log n)
Time complexity O(log n)
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

/*
space complexity O(1)
Time complexity O(n)
*/

function findSum(arr){
    let sum = 0

    for(let i =0 ; i<arr.length;i++){
        sum += arr[i]
    }

    return sum
}