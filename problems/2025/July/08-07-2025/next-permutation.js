/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1],
 [3,1,2], [3,2,1].
*/

var nextPermutation = function (nums) {

    let i = nums.length - 1;

    while (i > 0 && nums[i - 1] >= nums[i]) {
        i--
    }

    if (i === 0) {
        nums.reverse();
        return;
    }

    let j = nums.length - 1;

    while (j >= i && nums[j] <= nums[i - 1]) {
        j--;
    }

    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];

    reverse(nums, i, nums.length - 1);

    function reverse(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
}

var nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);

var nums1 = [3, 2, 1];
nextPermutation(nums1);
console.log(nums1);

var num2 = [1, 1, 5];
nextPermutation(num2);
console.log(num2);