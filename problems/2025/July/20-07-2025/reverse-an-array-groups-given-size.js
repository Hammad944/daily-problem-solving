//Reverse an Array in groups of given size
/*
Given an array arr[] and an integer k, find the array after reversing every subarray of consecutive
k elements in place. If the last subarray has fewer than k elements, reverse it as it is. Modify array in
place, do not return anything
*/

arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 3

function reverseInGroup(arr, k) {
    let n = arr.length;

    for (let i = 0; i < n; i += k) {
        let left = i;

        //To handle case when k is not 
        //multiple of n
        console.log(`i + k - 1 : ${i + k - 1}`);
        console.log(`n - 1 : ${n - 1}`);
        let right = Math.min(i + k - 1, n - 1);
        console.log(`Right : ${right}`);

        //Reverse the sub-array [left, right]

        while (left < right) {
            //Swap elements 
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left += 1;
            right -= 1;
        }
    }
    return arr;
}

// console.log(reverseInGroup(arr, k), ' console.log(reverseInGroup(arr,k)')

