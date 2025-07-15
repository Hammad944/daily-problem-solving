//Find the First Non-Repeating Character in a String
/*
Approach: Use a frequency map, then scan again to find the first unique character.
*/

function firstNonRepeatingChar(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of str) {
        if (freq[char] === 1) return char;
    }

    return null;
}

console.log(firstNonRepeatingChar("aabbccdeff")); // Output: d
console.log(firstNonRepeatingChar("aabbcc"));     // Output: null