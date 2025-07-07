// Insert Interval 
/*
Given a sorted array of non-overlapping intervals and a new interval, insert the new 
interval and merge if necassary
*/

function insert(intervals, newInterval) {
    let result = [];
    let i = 0;
    //add all intervals that come before newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {

        console.log(intervals[i]);

        result.push(intervals[i]);

        i++;
    }

    //merge overlapping intervals 
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    result.push(newInterval);

    //Add the remaining array
    while (i < intervals.length) {
        console.log(i, "console.log(i,");
        result.push(intervals[i]);
        i++
    }

    return result;
}
// insert([[1, 3], [6, 9]], [2, 5])
console.log(insert([[1, 3], [6, 9]], [2, 5]));

/*
Time Complexity
O(n) — we loop through all intervals once.
*/