
//solution`1
function countOccurrences(str,char){
let count = 0

    for(let i=0;i<str.length;i++){
        if(str[i] === char){
            count++
        }
    }

    return count;
}

//solution 2

// const countOccurrences = (str,char) => str.split(char).length -1
// Split the string on the character and return the length of the resulting array minus 1

module.exports = countOccurrences