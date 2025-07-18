//JavaScript program to find second largest element in an array

function getSecondLargestNumber(arr) {
    let n = arr.length;

    //sort the array in non-decreasing order
    arr.sort((a, b) => a - b);

    for (let i = n - 2; i >= 0; i--) {
        // return the first element which is not equal to the 
        if (arr[i] !== arr[n - 1]) {
            return arr[i]
        }
    }
    return -1
}

const arr = [12, 35, 1, 10, 34, 1];
// console.log(getSecondLargestNumber(arr));

//using two traversals
function getSecondLargest(arr) {
    let n = arr.length;

    let largest = -1, secondLargest = -1;

    //Finding the largest element
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    //Finding the second largest element
    for (let i = 0; i < n; i++) {
        if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}
// console.log(getSecondLargest(arr), ' console.log(getSecondLargest(arr)');

//using one traversal
//function to find the second largest element in the array

function getSecondLargestN(arr) {
    const n = arr.length;

    let largest = -1, secondLargest = -1

    //finding the second largest number
    for (let i = 0; i < n; i++) {
        //If arr[i] > largest, update the second largest with largest and largest with arr[i]

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        }
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(getSecondLargestN(arr))