/*
 Title: Birthday Cake Candles
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/birthday-cake-candles/
*/

function birthdayCakeCandles(arr) {
    let tallestCandle = 0;
    let candlesCounter = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > tallestCandle) {
            tallestCandle = arr[index];
            candlesCounter = 1;
        } else if (arr[index] === tallestCandle) {
            candlesCounter++;
        }
    }

    return candlesCounter;
}

console.log(birthdayCakeCandles([3,2,1,3]));
