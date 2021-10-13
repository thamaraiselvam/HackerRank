/*
 Title: Minimum Swaps 2
 Difficulty: Medium
 Score: 40
 Link: https://www.hackerrank.com/challenges/minimum-swaps-2
*/


function minimumSwaps(arr) {
    var origArray = arr.slice(0);
    var sortedArray = arr.sort((a,b) => a-b);
    let numberOfSwap = 0;
    for (var i = 0; i < origArray.length; i++) {
        if (origArray[i] != sortedArray[i]) {
            for (var j = i + 1; j < origArray.length; j++) {
                if (origArray[j] === sortedArray[i]) {
                    [origArray[i], origArray[j]] = [origArray[j], origArray[i]]
                    numberOfSwap++
                    break;
                }
            }
        }
    }

    return numberOfSwap;
}
