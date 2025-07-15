// Swap Two Numbers Without Temp Variable

// Using Arithmetic (+, -)

let a = 5; b = 10;

console.log(`Before swap, a : ${a} , b : ${b}`)
a = a + b; //15;
b = a - b; // 15 - 10 = 5;
a = a - b; // 15 - 5 = 10;
console.log(`After swap, a : ${a} , b : ${b}`)

//Using Bitwise XOR(Alternative)

let x = 7, y = 3;
console.log(`Before swap, x : ${x} , y : ${y}`);
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(`After swap, x : ${x} , y : ${y}`);

