/*
Given a non-negative number represented as an array of digits. The idea is to add 1 to the number(increment the number represented by 
the digits by 1). The digits are sorted such that the most significant digit is the first element of the array
*/

//[Approach - 1] - Using Carry - O(n) Time and O(1) Space

function addOne(arr) {

    let carry = 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let sum = arr[i] + carry;
        arr[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }

    if (carry > 0) {
        arr.unshift(carry);
    }

    return arr;
}

// let arr = [9, 9, 9];
// let res = addOne(arr);
// for (let i of res) {
//     process.stdout.write(i.toString());
// }

//[Approach - 2] - O(n) Time and O(1) Space

/*
The idea is to start from the end of the vector and if the element is 9 set it to 0, else increment the digit
by 1 and exit the loop
- If the loop set all digit to 0(if all digits were 9) insert 1 at the beginning
- Else increment the element at the position where the loop stopped
*/

function addOne1(arr) {
    //Initialize an index to end of array
    let index = arr.length - 1;
    //While the index is valid and the value 
    //at index is 9
    while (index >= 0 && arr[index] === 9) {
        arr[index--] = 0;
    }
    //if index < 0(if all are were 9)
    if (index < 0) {
        //insert an one at the beginning of the array
        arr.unshift(1);
    }
    else {
        arr[index]++;
    }

    return arr;
}

// let arr = [9, 9, 9];
// let res = addOne1(arr);
// for (let i of res) {
//     process.stdout.write(i.toString())
// }


//[Alternate Approach] - O(n) Time and O(1) Space

/*
To avoid inserting at front of array, we can firstly reverse the array, and then append the value at 
the last. Thereafter, we can reverse the array again to get the result.
*/

function addOne2(arr) {
    //reverse the digit 
    arr.reverse();

    //initialize an index to start of array
    let index = 0;

    // while the index is valid and the value 
    // at index is 9

    while (index < arr.length && arr[index] === 9) {
        arr[index++] = 0;
    }

    //if index == arr.length(if all arr were 9)
    if (index == arr.length) {
        arr.push(1)
    }
    else {
        arr[index]++
    }

    arr.reverse();

    return arr;
}

let arr = [9, 9, 9]
let res = addOne2(arr);
for (let i of res) {
    process.stdout.write(i.toString())
}