/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/

var maxSubArray = function (nums) {
    let res = nums[0];
    let total = 0;

    for (let n of nums) {
        if (total < 0)
            total = 0;

        total += n;

        res = Math.max(res, total);
    }

    return res;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));//6
console.log(maxSubArray([1]));//1
console.log(maxSubArray([5, 4, -1, 7, 8]));//23