const Array = require('./array')

function main() {
    let arr = new Array()
    Array.SIZE_RATIO = 3
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    // arr.pop();
    // arr.pop();
    // arr.pop();

    // arr.push("tauhida");
    // console.log(arr.get(2));  
    console.log(arr)
}

//main()

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

//console.log(URLify('I want a donut!'))

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

//console.log(notFive([1,7,3,89,3,34,-23,2,78]))

'7. Max sum in the array'

let sumTest = [4, 6, -3, 5, -2, 1]

const maxSum = arr => {
    let highestNum = 0
    let runningTotal = 0
    for (let i = 0; i < arr.length; i++) { 
        runningTotal += arr[i]
        if (runningTotal > highestNum) {
            highestNum = runningTotal
        }
    }
    return highestNum
}   

//console.log('loop', maxSum(sumTest))

const maxSumForOf = arr => {
    let highestNum = 0
    for (let runningTotal of arr) {
        runningTotal += runningTotal
            if (runningTotal > highestNum) {
                highestNum = runningTotal
            }
    }
    return highestNum
}

//console.log('forOf', maxSumForOf(sumTest))

const maxSumForEach = arr => {
    let highestNum = 0
    let runningTotal = 0
    arr.forEach(num => {
        runningTotal += num
            if (runningTotal > highestNum) {
                highestNum = runningTotal
            }
    }) 
    return highestNum
}   

//console.log('forEach', maxSumForEach(sumTest))

const maxSumMap = arr => {
    let highestNum = 0
    let runningTotal = 0
    arr.map(num => {
        runningTotal += num
            if (runningTotal > highestNum) {
                highestNum = runningTotal
            }
    }) 
    return highestNum
}   

//console.log('map', maxSumMap(sumTest))


'8. Merge arrays'

let arrone = [1, 3, 6, 8, 11]
let arrtwo = [2, 3, 5, 8, 9, 10]
let arrthree = ['A', 'C', 'E']
let arrfour = ['B', 'D', 'F']

const merge = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2]
    newArr.sort((a, b) => a - b)
    return newArr
}

//console.log('8. Merge arrays', merge(arrone, arrtwo))


'9. Remove characters'

let toRemove = "aeiou"
let breakString = 'Battle of the Vowels: Hawaii vs. Grozny'
//let easy = "Tina"

const removeChar = (string, remove) => {
    let newArr = []
    
    for (let i = 0; i < string.length; i++) {
        let search = true
       
        for (let j = 0; j < remove.length; j++) {
            if (string[i] === remove[j]) {
                search = false
            }
        } 
        if (search) {
            newArr[i] = string [i]
        }
    } 
    return newArr.join('')
}

//console.log('9. Remove characters',removeChar(breakString, toRemove))

'10. Producucts'


'11. 2D array'

let input = [
                [1,0,1,1,0],
                [0,1,1,1,0],
                [1,1,1,1,1],
                [1,0,1,1,1],
                [1,1,1,1,1]
            ]

// const twoD = arr => {
//     let output = []
//     let copy = [...arr]
//     for (let i = 0; i < copy.length; i++) {
       
//         for (let j = 0; j < copy[i].length; j++) {
//             //console.log(arr[i][j])
//             if (copy[i][j] === 0) {
//                 console.log('if - output[j]', copy[i][j])
//                 let newCopy = copy[i].map(x => x * 0)
//                 output[i] = newCopy

//             } else {
//                 output[i] = copy[i]
//                 console.log('else - output[j]', output)
//             }
//         } 
//         //console.log(copy[i])
//     } 
//     console.log('output', output)
//     return output
// }

const twoD = arr => {
    let output = []
    let row = []
    let column = []
    //if arr[i][j] has a zero, the row and column is zero
    //---> first, row
    for (let i = 0; i < arr.length; i++) {
       // console.log('A - row')
        for (let j = 0; j < arr[i].length; j++) {
            // console.log('B - column')
            if (arr[i][j] === 0) {
                row[i] = true
                column[j] = true
                // console.log('row', row)
                // console.log('column', column)
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        // console.log('C - row')
        if (!output[i]) {
            output[i] = []
        }
        for (let j = 0; j < arr[0].length; j++) {
            // console.log('D - column')
            if (row[i] || column[j]) {
                output[i][j] = 0
            } else {
                output[i][j] = 1
            }
        }
    }
    return output 
}

//O(n^2)
//console.log(twoD(input))

function array2D(arr) {
    const originalArr = JSON.parse(JSON.stringify(arr))
    let newArr = arr

    originalArr.map((row, rowI) => {
        row.map((item, arrI) => {
            if (item === 0) {
                newArr[rowI].forEach((num, i) => newArr[rowI][i] = 0)
                newArr.forEach(newRow => newRow[arrI] = 0)
            }
        })
    })
    return newArr
}

let array = [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]

console.log(array2D(array))


'12. String rotation'

