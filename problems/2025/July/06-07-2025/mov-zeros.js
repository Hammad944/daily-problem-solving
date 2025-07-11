/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

var moveZeroes = function (nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++
        }
    }
    return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
