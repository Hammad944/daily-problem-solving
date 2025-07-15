//Find Duplicate Elements in an Array

var findDuplicates = function (arr) {

    const seen = new Set();
    const duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 1]))