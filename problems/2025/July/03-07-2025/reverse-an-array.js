// Reverse an Array
arr = [5, 3, 1, 2, 4];

// reversed_array = [];

// for (i = arr.length - 1; i >= 0; i--) {
//     console.log(i);
//     reversed_array.push(arr[i]);
// }

// console.log(reversed_array);

// Method#2

//using two pointers -> take two pointer 

// let l = 0; r = arr.length - 1;

// console.log(l, r);

// while (l < r) {

//     let temp = arr[l];
//     arr[l] = arr[r];
//     arr[r] = temp;

//     l++;
//     r--
// }

// console.log(arr)

//Method#3
/*
Using Recurrsion
*/
function ReverseArray(arr1, l, r) {

    if (l >= r) {
        return
    }

    let temp = arr1[l];
    arr1[l] = arr1[r];
    arr1[r] = temp;

    ReverseArray(arr1, l + 1, r - 1)
}

ReverseArray(arr, 0, arr.length - 1);

console.log(arr)