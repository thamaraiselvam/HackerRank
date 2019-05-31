/*
 Title: Arrays: Left Rotation
 Difficulty: Easy
 Score: 20
 Link: https://www.hackerrank.com/challenges/ctci-array-left-rotation/
*/

function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        a.push(a.shift());
    }

    return a;
}
