// Return an Array of Numbers

function generateArray() {
    const arr = [1, 2, 3, 4, 5];
    return arr
}

const result = generateArray();
console.log(result, ' console.log(result,');

// Return an Array with Computed Values

function createArray(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i * 2)
    }
    return arr;
}

const result1 = createArray(5);

console.log("Array of multiples of 2: ", result1);

// Return Filtered or Modified Arrays

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0)
}

const input = [1, 2, 3, 4, 5, 6];
const evens = getEvenNumbers(input);

console.log("Even numbers: ", evens);