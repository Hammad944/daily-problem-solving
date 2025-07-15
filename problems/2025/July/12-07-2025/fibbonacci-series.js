//Fibonacci Series – Iterative Approach

var fibonacciIterative = function (n) {

    if (n <= 0) return [];

    let fib = [0];

    if (n === 1) return fib;

    fib.push(1);

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }

    return fib;
}

console.log(fibonacciIterative(10));