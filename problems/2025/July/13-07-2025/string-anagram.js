//Sort & Compare (Simple)

/*
Two strings are anagrams if they contain the same characters in the same frequency, just possibly in a different order.
*/

var areAnagrams = function (str1, str2) {

    if (str1.length !== str2.length) return false;

    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');

    return sorted1 === sorted2;
}

// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("hello", "world"));

//Approach 2 Count Frequencies (No Sort)

var areAnagrams1 = function (str1, str2) {

    if (str1.length !== str2.length) return false;

    const count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!count[char]) return false;

        count[char]--
    }

    return true;
}

console.log(areAnagrams("race", "care"));     // true
console.log(areAnagrams("abc", "def"));       // false
