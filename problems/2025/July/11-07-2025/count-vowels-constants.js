//Count the number of vowels and consonants in a string

function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount }
}

// console.log(countVowelsAndConsonants("Hello World"));

// Without regex


var countVowelsAndConsonantsWithoutRegex = function (str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        const code = char.charCodeAt(0);

        const isUpper = code >= 65 && code <= 90;
        const isLower = code >= 97 && code <= 122;

        if (isLower || isUpper) {
            if (vowels.includes(char)) {
                vowelCount++
            }
            else {
                consonantCount++
            }
        }
    }
    return { vowels: vowelCount, consonants: consonantCount }
}

console.log(countVowelsAndConsonantsWithoutRegex("Hello World"));

