// JavaScript program to find a maximum product of a
// triplet in array of integers using nested loops

// Function to find a maximum product of a triplet
// in array of integers of size n
function maxProduct(arr) {
    let n = arr.length;

    let maxProduct = -1e9;

    for (let i = 0; i < n - 2; i++)
        for (let j = i + 1; j < n - 1; j++)
            for (let k = j + 1; k < n; k++)
                maxProduct = Math.max(
                    maxProduct, arr[i] * arr[j] * arr[k]);

    return maxProduct;
}

// Driver code
// let arr = [10, 3, 5, 6, 20];
// let arr = [-10, -3, -5, -6, -20];
let arr = [-10, -3, 5, 6, -20];
// console.log(maxProduct(arr));

function maxProduct1(arr) {
    let n = arr.length;

    //sort the array in ascending order
    arr.sort((a, b) => a - b);

    console.log(arr, ' console.log(arr,');

    return Math.max(arr[0] * arr[1] * arr[n - 1], arr[n - 1] * arr[n - 2] * arr[n - 3])
}

// console.log(maxProduct1(arr), ' console.log(maxProduct1(arr)')

// A O(n) javascript program to find maximum product
// pair in an array.

function maxProduct2(arr) {
    let n = arr.length;

    let maxA = Number.MIN_SAFE_INTEGER,
        maxB = Number.MIN_SAFE_INTEGER,
        maxC = Number.MIN_SAFE_INTEGER

    //Initialize Minimum and second minimum element
    let minA = Number.MAX_SAFE_INTEGER,
        minB = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < n; i++) {
        if (arr[i] > maxA) {
            maxC = maxB;
            maxB = maxA;
            maxA = arr[i];
        }
        else if (arr[i] > maxB) {
            maxC = maxB;
            maxB = arr[i];
        }
        else if (arr[i] > maxC) {
            maxC = arr[i]
        }

        //Update Minimum and second minimum element 
        if (arr[i] < minA) {
            minB = minA;
            minA = arr[i];
        } else if (arr[i] < minB) {
            minB = arr[i]
        }
    }
    return Math.max(minA * minB * maxA, maxA * maxB * maxC);
}

console.log(maxProduct2(arr), ' console.log(maxProduct2(arr)')