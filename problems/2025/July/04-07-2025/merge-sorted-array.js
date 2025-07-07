/*
Given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
*/
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    console.log('Initial:', { p1, p2, p });

    while (p2 >= 0) {
        console.log('Before insert:', { p1, p2, p });
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
        console.log('After insert:', nums1.slice());
    }
}


let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);