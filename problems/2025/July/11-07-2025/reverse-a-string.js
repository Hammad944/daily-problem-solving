/*
 Reverse a string without using built-in functions
*/

function reverseString(str) {

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(i, ' console.log(i')
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString('javascript'), '  REVERSED STR');