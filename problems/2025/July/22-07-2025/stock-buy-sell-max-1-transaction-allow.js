//Stock Buy and Sell - Max one Transaction Allowed
/*
Given an array prices[] of length N, representing the prices of the stocks on different days, the task to find the maximum profit
possible by buying and selling the stocks on different days when at most one transaction allowed. Here one transaction means 1 buy + 1 sell
*/
//Note: Stock must be bought before being sold 

//[Naive Approach] By exploring all possible pairs - O(n^2) Time and O(1) Space

function maxProfit(prices) {
    let n = prices.length;
    let res = 0;

    //Explore all possible ways to buy and sell stock
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            // console.log(prices[j], ' console.log(prices[j]');
            // console.log(prices[i], ' console.log(prices[i]');
            // console.log(res, ' Response');
            res = Math.max(res, prices[j] - prices[i])
        }
    }
    return res;
}

let prices = [7, 10, 1, 3, 6, 9, 2];

// console.log(maxProfit(prices))

//[Expected Approach] One Traversal Solution - O(n) Time and O(1) Space
//using one traversal 

function maxProfit1(prices) {
    let minSoFar = prices[0];
    let res = 0;

    //Update the minimum value seen so far 
    for (let i = 1; i < prices.length; i++) {
        console.log(minSoFar, ' console.log(minSoFar,');
        console.log(prices[i], ' console.log(prices[i],');
        minSoFar = Math.min(minSoFar, prices[i]);

        //Update result if we get more profit
        res = Math.max(res, prices[i] - minSoFar);
    }
    return res;
}
console.log(maxProfit1(prices))