//Check if a Number is Armstrong
/*
An Armstrong number (also called narcissistic number) of n digits is a number that is equal to the sum of its digits each raised 
to the power n.
*/

var isArmstrong = function (number) {

    const str = number.toString();
    const numDigits = str.length;

    let sum = 0;

    for (let digit of str) {
        sum += Math.pow(Number(digit), numDigits);
    }

    return `${sum} === ${number} => ${sum === number}`;
}

console.log(isArmstrong(153));
console.log(isArmstrong(9474));
console.log(isArmstrong(123));