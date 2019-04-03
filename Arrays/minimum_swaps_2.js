/*
 Problem name: Minimum Swaps 2
 Difficulty: Medium
 Pass Test All Case: Yes
 Score: 40/40
 More Information: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays
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