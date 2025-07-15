// Find the Frequency of Characters in a String

function characterFrequency(str) {
    const freq = {};

    for (let char of str) {
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    return freq;
}

console.log(characterFrequency("hello world"));
