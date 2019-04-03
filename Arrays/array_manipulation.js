/*
 Problem name: Array Manipulation
 Difficulty: Hard
 Pass Test All Case: Yes
 Score: 60/60
 More Information: https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays
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