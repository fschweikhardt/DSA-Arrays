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

console.log(URLify('www.thinkful.com /tauh ida parv een'))

'6. Filtering an array'
