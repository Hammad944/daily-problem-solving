// Convert Binary to Decimal and Vice Versa

//Binary to Decimal

var binaryToDecimal = function (binaryStr) {
    let decimal = 0;

    for (let i = 0; i < binaryStr.length; i++) {
        decimal = decimal * 2 + parseInt(binaryStr[i]);
    }

    return decimal
}


console.log(binaryToDecimal("1010")); // Output: 10
console.log(binaryToDecimal("1111")); // Output: 15