/*
 Title: Plus Minus
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/plus-minus/problem
*/

function plusMinus(arr) {
    let result = {
        positive: 0,
        negative: 0,
        zero: 0,
    }

    let arrLength = arr.length;
    for (let index = 0; index < arrLength; index++){
        if (arr[index] === 0) {
            ++result.zero;
        } else if (arr[index] > 0) {
            ++result.positive;
        } else {
            ++result.negative;
        }
    }

    printValue(result.positive, arrLength);
    printValue(result.negative, arrLength);
    printValue(result.zero, arrLength);
}

function printValue(count, length) {
    console.log((count / length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
