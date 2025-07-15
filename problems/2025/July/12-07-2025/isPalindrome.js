// Check for Palindrome (number or string)

var isPalindrome = function (input) {
    let str = input.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++
        right--
    }
    return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome(121));