/*
 Title: Bubble Sort
 Difficulty: Easy
 Score: 30
 Link: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
*/

module.exports = function bubbleSort(arr) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                counter++;
                isSorted = false;
            }
        }
    }

    return arr;
}
