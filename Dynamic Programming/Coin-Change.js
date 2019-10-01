//

/*
 Title: The Coin Change Problem
 Difficulty: Medium
 Score: 30
 Link: https://www.hackerrank.com/challenges/coin-change/problem
*/

function getWays(n, c) {
  //create a memo that represents the number of ways to get to the index value.
  //Every index should be 0.
  let memo = new Array(n + 1).fill(0);
  //The only exception is the 0 index because there is 1 way to achieve the 0
  //value, by having no coins.
  memo[0] = 1;
  for (let i = 0; i < c.length; i++) {
    let coin = c[i];
    for (let j = coin; j < memo.length; j++) {
      //This will check how many ways there are to get to the value j-coin.
      //You want this value because you have that many ways in addition to get
      //to the current value j.
      memo[j] += memo[j - coin];
    }
  }
  //return the last element which is the solution.
  return memo[n];
}
