const { Array } = require('./array')

function main() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    console.log(arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
//Array { length: 6, _capacity: 12, ptr: 3 } the array had to resize 3x
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
//Array { length: 3, _capacity: 12, ptr: 3 } array does not resize to a smaller memory space

//Print the 1st item in the array arr.
    //arr.get(0);
    //console.log(arr)
}

main();