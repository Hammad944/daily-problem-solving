/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets
*/

var threeSum = function (nums) {

    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {

            let total = nums[i] + nums[j] + nums[k];
            console.log(i, ' I index \n');
            console.log(j, ' J index \n');
            console.log(k, ' K index \n');
            console.log(total, ' Total')
            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            }
            else {

                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j - 1] && j < k) {
                    j++
                }
            }
        }
    }
    return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([[0, 0, 0]]));