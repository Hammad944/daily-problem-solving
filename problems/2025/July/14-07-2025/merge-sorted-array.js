function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    // Traverse both arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// Example usage:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]
