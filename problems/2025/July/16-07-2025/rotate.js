// Given an array arr[] of size n and an integer d, rotate the array to the left by d positions 
arr = [1, 2, 3, 4, 5], d = 2

//1. Brute Force (Naive) Approach

function rotateLeftNaive(arr, d) {
    const n = arr.length;
    console.log(n, 'n');
    console.log(d, 'd');
    for (let i = 0; i < d; i++) {
        const first = arr[0];
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = first;
    }
    return arr;
}
// console.log(rotateLeftNaive(arr, d));

//2. Using Extra Array

function rotateLeftExtraArray(arr, d) {
    const n = arr.length;
    console.log(n, 'console.log(n');
    console.log(d, ' before modulo');
    d = d % n;
    console.log(d, ' after modulo');
    const rotated = [];

    for (let i = d; i < n; i++) {
        rotated.push(arr[i]);
    }

    for (let i = 0; i < d; i++) {
        rotated.push(arr[i]);
    }

    return rotated;
}

// console.log(rotateLeftExtraArray(arr, d))

//3. Optimal Approach – Using Reversal Algorithm

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateLeft(arr, d) {
    const n = arr.length;
    d = d % n;

    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);

    return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]


console.log(rotateLeft(arr, d))