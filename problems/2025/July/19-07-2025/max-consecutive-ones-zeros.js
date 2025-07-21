
//Given a binary array arr[] consisting of only 0s and 1s, find the length of the longest contiguous sequence of either 1s or 0s in the array.

function maxConseBits(arr) {
    let maxCount = 0; count = 1;

    //Loop through the array starting from the second element

    for (let i = 1; i < arr.length; i++) {

        //If the current element is the same as the previous one
        //increment the count
        if (arr[i] === arr[i - 1]) {
            count++
        }

        //If not equal, update maxCount if needed and reset count
        else {
            maxCount = Math.max(maxCount, count);
            count = 1
        }
    }

    return Math.max(maxCount, count);
}

let arr = [0, 1, 0, 1, 1, 1, 1];
// console.log(maxConseBits(arr));

function maxConsecBits(arr) {
    let maxCount = 0, count = 0, prev = -1;

    for (let num of arr) {
        //If the current number is the 
        //same as, previous number 
        if ((prev ^ num) === 0) {
            count++
        }
        else {
            //Update maxCount and reset count
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
        prev = num;
    }
    return Math.max(maxCount, count);
}

console.log(maxConsecBits(arr));