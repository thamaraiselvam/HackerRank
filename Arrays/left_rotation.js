/*
 Problem name: Arrays: Left Rotation
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 20/20
 More Information: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays
*/

function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        a.push(a.shift());
    }

    return a;
}