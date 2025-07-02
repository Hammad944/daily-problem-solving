// Finding Maximum Value in an Array 
arr = [5, 3, 1, 2, 4];

let max = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log(`Maximum value is: ${max}`);