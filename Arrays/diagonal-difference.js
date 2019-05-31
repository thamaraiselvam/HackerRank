
/*
 Name: Diagonal Difference
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/diagonal-difference
*/

function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let tmpLength = arr.length;
    for (let i = 0; i < arr.length; i++){
        leftToRight += arr[i][i];
        rightToLeft += arr[i][--tmpLength];
    }

    return Math.abs(leftToRight - rightToLeft);
}

let input = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
console.log(diagonalDifference(input))
