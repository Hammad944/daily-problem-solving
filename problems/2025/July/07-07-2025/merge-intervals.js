/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping
 intervals that cover all the intervals in the input.
*/

var mergeInterval = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];

    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];

        if (interval[0] <= prev[1]) {
            console.log(interval, ' console.log(interval,');
            console.log(prev, ' Before console.log(prev,');
            prev[1] = Math.max(prev[1], interval[1]);
            console.log(prev, ' After console.log(prev,');
        } else {
            console.log('Before Megred: ', merged)
            merged.push(prev);
            prev = interval;
            console.log('After Megred: ', merged);
            console.log('Prev in Else: ', prev);
        }
    }

    merged.push(prev);
    return merged;
}

// console.log(mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(mergeInterval([[1, 4], [4, 5]]));