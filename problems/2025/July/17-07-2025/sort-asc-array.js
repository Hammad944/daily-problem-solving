//Sort an Array in Ascending Order
//Using buit-in sort Function 

function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

const array = [5, 2, 9, 1, 3];
const sortedArray = sortAscending(array);
console.log("Sorted Array Ascending: ", sortedArray);

//Without Using sort() – Manual Implementation (Bubble Sort)
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        console.log(`i : ${i}`);
        console.log(`n - 1 : ${n - 1}`);
        console.log(`n - i - 1 : ${n - i - 1}`);
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`j : ${j}`);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const array1 = [5, 2, 9, 1, 3];
const sorted = bubbleSort(array);
console.log(`Sorted Array(Ascending): `, sorted);
