/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

//Method#1

var rotate = function (nums, k) {

    const n = nums.length;
    k = k % n;
    console.log(`Module of k: ${k}`);

    const rotated = new Array(n).fill(0);

    console.log(rotated, ' Rotated Array');

    for (let i = 0; i < n; i++) {
        console.log(`(i + k) % n : ${(i + k) % n} - nums[i] : ${nums[i]}`)
        rotated[(i + k) % n] = nums[i];
        console.log(`rotated : ${rotated}`)
    }
}

nums = [1, 2, 3, 4, 5, 6, 7];
// rotate(nums, 3);
// rotate(nums, 9);

//Method#2

var rotateArray = function (nums, k) {

    k = k % nums.length;

    if (k !== 0) {
        console.log(`-k : ${-k}`);
        let temp = nums.slice(-k).concat(nums.slice(0, -k));
        console.log(`Temp : ${temp}`);

        for (let i = 0; i < nums.length; i++) {
            console.log(nums[i], ' nums[i]');
            console.log(temp[i], ' temp[i]');
            nums[i] = temp[i]
        }
    }
}

// rotateArray(nums, 9);

//Method#3

var rotateArrayAgain = function (nums, k) {

    k %= nums.length;
    console.log(`k : ${k}`);
    const reverse = (left, right) => {

        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--
        }
    };
    console.log(`nums : ${nums}`);
    reverse(0, nums.length - 1);
    console.log(`after reverse(0, nums.length - 1); : ${nums}`);
    reverse(0, k - 1);
    console.log(`after reverse(0, k - 1); : ${nums}`);
    reverse(k, nums.length - 1);
    console.log(`after reverse(k, nums.length - 1); : ${nums}`);
}

rotateArrayAgain(nums, 3);