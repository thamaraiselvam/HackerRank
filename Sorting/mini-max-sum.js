/*
 Name: Mini-Max Sum
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/mini-max-sum/problem
*/

function miniMaxSum(arr) {
    let sum = [0, 0];
    arr = arr.sort((a, b) => { return a - b });
    for (let i = 0; i < 4; i++){
        sum[0] += arr[i];
        sum[1] += arr[arr.length - (i+1)];
    }

    console.log(sum[0], sum[1]);
}

miniMaxSum(1, 2, 3, 4, 5);
