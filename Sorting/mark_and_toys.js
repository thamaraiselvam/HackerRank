/*
 Problem name: Mark and Toys
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 35/35
 More Information: https://www.hackerrank.com/challenges/mark-and-toys/problem
*/

function maximumToys(prices, balance) {
    prices = prices.sort((a, b) => a - b)
    let toysBought = 0;
    console.log(prices);
    for (let i = 0; i < prices.length; i++){
        if (balance >= prices[i]) {
            toysBought++;
            balance -= prices[i];
        } else {
            break;
        }
    }
    return toysBought;

}

let arr = [33324560, 77661073, 31948330, 21522343, 97176507, 5724692, 24699815, 12079402, 6479353, 28430129, 42427721, 57127004, 26256001, 29446837, 65107604, 9809008, 65846182, 8470661, 13597655, 360];
console.log(maximumToys(arr, 100000));