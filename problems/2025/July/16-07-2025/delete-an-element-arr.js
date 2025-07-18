/*
Given an array arr[] and a value x, 
write a program to delete the first occurrence of x from the array and shift remaining elements to the left.
*/

var deleteElement = function (arr, value) {
    let index = -1;

    //Find the index of the element to be deleted
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            index = i;
            break
        }
    }
    console.log(`Index: ${index}`)

    if (index === -1) return arr;

    //Shift element to the left 
    console.log(`Before Shifting Array: ${arr}`);
    for (let i = index; i < arr.length - 1; i++) {
        console.log(`arr[i] : ${arr[i]} - arr[i + 1] : ${arr[i + 1]}`);
        arr[i] = arr[i + 1];
    }
    console.log(`After Shifting Array: ${arr}`);

    arr.length = arr.length - 1;

    return arr;
}

let arr = [1, 3, 5, 7, 9];

// console.log(deleteElement(arr, 5));

// Using splice() Built-in Method (Not DSA-optimal, but clean)

function deleteWithSplice(arr, value) {
    const index = arr.indexOf(value);
    if (index != -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// console.log(deleteWithSplice(arr, 5))

//Functional Approach using filter() (Not in-place)

function deleteFunctional(arr, value) {
    return arr.filter(item => item !== value)
}
// console.log(deleteFunctional(arr, 5))

//If Array is Sorted – Binary Search + Shift

function binarySearch(arr, value) {
    let low = 0; high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === value) return mid;

        else if (arr[mid] < value) low = mid + 1;

        else high = mid - 1
    }
    return -1
}

function deleteSorted(arr, value) {
    const index = binarySearch(arr, value);
    if (index === -1) return arr;
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    return arr;
}

console.log(deleteSorted(arr, 9));