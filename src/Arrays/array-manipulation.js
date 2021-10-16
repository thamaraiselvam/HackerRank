/*
 Title: Array Manipulation
 Difficulty: Hard
 Score: 60
 Link: https://www.hackerrank.com/challenges/crush/problem
*/

function arrayManipulation(n, queries) {
    let arr = Array(n).fill(0);

    for (let a = 0; a < queries.length; a++) {
        for (let index = queries[a][0] - 1; index < queries[a][1]; index++) {
            arr[index] += queries[a][2];
        }
    }

    return Math.max(...arr);
}
