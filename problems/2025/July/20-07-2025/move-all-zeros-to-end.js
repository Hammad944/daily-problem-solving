// JavaScript Program to move all zeros to end using temporary array

//function to move all zeros to the end 
function pushZerosToEnd(arr) {
    const n = arr.length;
    const temp = new Array(n);

    //to keep of the index in temp[]
    let j = 0;
    //Copy non-zero elements to temp[]
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            // console.log(j++, ' console.log(j++')
            temp[j++] = arr[i];
        }
    }

    //Fill remaining positions in temp[] with zeros 
    while (j < n)
        temp[j++] = 0;

    //Copy all the elements from temp[] to arr[]
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
// pushZerosToEnd(arr, ' pushZerosToEnd(arr,');
// console.log(`After pushing: ${arr}`);

// [Better Approach] Two Traversals

// Program to move all zeros to end using two traversals

function pushZerosToTheEnd(arr) {
    //Count of non-zero elements 
    let count = 0;
    //If the element is non-zero, replace the element at 
    //index 'count' with this element and increment count 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    console.log(`Count before: ${count}`);
    //Now all non-zero elements have been shifted to the front. Make all elements 0 from count to end.
    while (count < arr.length) {
        arr[count++] = 0;
    }
    console.log(`Count before: ${count}`);
}

// pushZerosToTheEnd(arr);
// console.log(arr, ' console.log(arr,')

// [Expected Approach] One Traversal
//Program to move all zeros to end using one traversal

function pushZeroToRight(arr) {

    // Pointer to track the position for next non-zero element

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        //If the current element is non-zero
        if (arr[i] !== 0) {
            //Swap the current element with the 0 at index 'count'
            [arr[i], arr[count]] = [arr[count], arr[i]];
            //Move 'count' pointer to the next position
            count++;
        }
    }
}
pushZeroToRight(arr);

console.log(`After pushZeroToRight(arr) : ${arr}`);