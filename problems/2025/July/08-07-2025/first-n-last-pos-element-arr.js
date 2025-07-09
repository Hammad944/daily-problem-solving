/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

var searchRange = function (nums, target) {

    const bSearch = (nums, target, isSearchingLeft) => {
        let left = 0;
        let right = nums.length - 1;
        let idx = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > target) {
                right = mid - 1;
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                idx = mid;
                if (isSearchingLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return idx;
    }

    const left = bSearch(nums, target, true);
    const right = bSearch(nums, target, false);

    return [left, right];
}

// nums = [5, 7, 7, 8, 8, 10], target = 8;
// console.log(searchRange(nums, target));

// nums = [5, 7, 7, 8, 8, 10], target = 6;
// console.log(searchRange(nums, target));

nums = [], target = 0;
console.log(searchRange(nums, target));