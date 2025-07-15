//Find the GCD of Two Numbers
var findGCD = function (a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(findGCD(48, 18));
console.log(findGCD(20, 8))