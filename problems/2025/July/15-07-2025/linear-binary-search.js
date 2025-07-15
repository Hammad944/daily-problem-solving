//Linear Search
//Use when the array is unsorted

function linearSearch(array, target) {
    for (i = 0; i < array.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1
}

// console.log(linearSearch([5, 3, 8, 4, 2], 4)); // Output: 3
// console.log(linearSearch([1, 2, 3], 9));       // Output: -1

var binarySearch = function (arr, target) {
    let left = 0; right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        else if (arr[mid] < target) left = mid + 1;

        else right = mid - 1
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarySearch([1, 3, 5, 7, 9], 6)); // Output: -1