/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except
 nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

var productExceptSelf = function (nums) {

    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }
    console.log(`Output after iterating from left: ${output}`);

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    console.log(`Output after iterating from right: ${output}`);

    return output;
}

// nums = [1, 2, 3, 4];
nums = [-1, 1, 0, -3, 3];
console.log('Output: ', productExceptSelf(nums));
