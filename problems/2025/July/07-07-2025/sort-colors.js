/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white, and blue.
*/

var setColors = function (nums) {
    let count = { 0: 0, 1: 0, 2: 0 };

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }
    console.log(`Count After for loop: ${count[0]}`);

    let idx = 0;

    for (let color = 0; color < 3; color++) {
        let freq = count[color];
        console.log(`Frequency : ${freq}`);
        for (let j = 0; j < freq; j++) {
            nums[idx] = color;
            idx++
        }
    }
}
nums = [2, 0, 2, 1, 1, 0];
// setColors(nums);
// console.log(nums);


var setColors1 = function (nums) {
    let red = 0;
    let white = 0;
    let blue = nums.length - 1;

    while (white <= blue) {

        if (nums[white] === 0) {
            [nums[white], nums[red]] = [nums[red], nums[white]];
            red++;
            white++;
        }
        else if (nums[white] === 1) {
            white++
        } else {
            [nums[white], nums[blue]] = [nums[blue], nums[white]];
            blue--
        }
    }
}
setColors1(nums);
console.log(nums);