/*
Given an sorted array arr[] of integers, rearrange the elements into a wave-like array. An array arr[0...n-1] is said to be in 
wave form if it follow the pattern: arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] ... and so on and find the lexicographically 
smallest one.
*/

arr = [1, 2, 3, 4, 5];

function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function sortInWave(arr) {
    //Swap adjacent elements 
    for (let i = 0; i < arr.length - 1; i += 2) {
        swap(arr, i, i + 1)
    }
}

sortInWave(arr);

console.log(arr.join(" "));