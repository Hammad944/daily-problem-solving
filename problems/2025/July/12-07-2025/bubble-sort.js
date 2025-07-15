//Sort an Array using Bubble Sort

var bubbleSort = function (arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let swap = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = swap;
                swapped = true;
            }
        }
        n--
    } while (swapped);

    return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
