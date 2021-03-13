const Array = require('./array')

function main() {

    Array.SIZE_RATIO = 3;

    let arr = new Array();

    // arr.push(3);

    // arr.push(5);
    // arr.push(15);
    // arr.push(19);
    // arr.push(45);
    // arr.push(10);

    // arr.pop();
    // arr.pop();
    // arr.pop();

    arr.push("tauhida");

    //console.log(arr.get(0));
    
}

main();

'5. URLify a string'

const URLify = string => {
    let newString = []
    for (let i = 0; i < string.length; i++) {
        //push each indexOf
        //if i === '' convert to symbol
        if (string[i] === ' ') {
            newString[newString.length] = '%20'
        } else {
            newString[newString.length] = string[i]
        }
        //join the array to string and return
    } 
        return newString.join('')
}

console.log(URLify('I want a donut!'))

'6. Filtering an array'

const notFive = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        //if arr[i] < 5, i = ''
        if (arr[i] <  5) { 
            //do nothing 
        } else {
            newArr[newArr.length] = arr[i]
        }
    } return newArr
}

console.log(notFive([1,7,3,89,3,34,-23]))

'7. Max sum in the array'

let sumTest = [4, 6, -3, 5, -2, 1]

const maxSum = arr => {
    let newTotal = 0
    for (let i = 0; i < arr.length; i++) { 
        //update newtotal
        //check if new number is greater than old total
        if (newTotal < arr[i] + newTotal) {
            //do nothing
        }
    }
    return newTotal
}   

console.log(maxSum(sumTest))