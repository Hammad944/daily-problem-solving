//Left Rotate an Array by D Positions
//Approach: Slice & Concat

var leftRotate = function (arr, d) {
    const n = arr.length;
    d = d % n;

    const rotated = arr.slice(d).concat(arr.slice(0, d));

    return rotated
}

// console.log(leftRotate([1, 2, 3, 4, 5], 2))

var leftRotateInPlace = function (arr, d) {
    const n = arr.length;
    d = d % n;

    for (let i = 0; i < d; i++) {
        let first = arr.shift();
        arr.push(first)
    }

    return arr;
}
console.log(leftRotateInPlace([1, 2, 3, 4, 5], 2));
