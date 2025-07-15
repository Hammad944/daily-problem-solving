//Find the second largest element in an array

var secondLargestNo = function (arr) {

    if (arr.length < 2) return null;

    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

console.log(secondLargestNo([10, 5, 8, 20, 20]));
console.log(secondLargestNo([4]));
console.log(secondLargestNo([5, 5, 5]));  