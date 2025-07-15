//Find the Missing Number in an Array of 1 to N

/*
Array contains N-1 numbers from 1 to N (no duplicates).
Exactly one number is missing.
*/
//15 - 18 
function findMissingNumber(arr) {

    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3