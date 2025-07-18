//Function to find the third largest element

function thirdLargestNo(arr) {
    let n = arr.length;
    //Sort the array
    arr.sort((a, b) => a - b);

    //return the third largest number
    return arr[n - 3]
}

let arr = [1, 14, 2, 16, 10, 20];

// console.log(thirdLargestNo(arr));

//Function to find the third largest element 

function thirdLargest(arr) {
    let n = arr.length;

    //Find the first maximum element.

    let first = -Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] > first) first = arr[i]
    }

    //Find the second largest no 
    let second = -Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] > second && arr[i] < first) {
            second = arr[i]
        }
    }

    //Find the third largest element

    let third = -Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] > third && arr[i] < second) {
            third = arr[i]
        }
    }
    return third;
}

// console.log(thirdLargest(arr), ' console.log(thirdLargest(arr)')


function thirdLargestN(arr) {
    let n = arr.length;

    let first = -Infinity, second = -Infinity,
        third = -Infinity
    for (let i = 0; i < n; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second) {
            third = second;
            second = arr[i];
        }
        else if (arr[i] > third) {
            third = arr[i];
        }
    }
    return third;
}

console.log(thirdLargestN(arr), ' console.log(thirdLargestN(arr)')