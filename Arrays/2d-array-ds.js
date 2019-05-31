/*
 Title: 2D Array - DS
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/2d-array/
*/

function hourglassSum(arr) {
    let maxValue;
    let outerCounter = 0;
    for (let i = 0; i < 6; i++) {
        outerCounter++;
        if (outerCounter > 4) {
            outerCounter = 0;
            break;
        }
        let counter = 0;
        for (let j = 0; j < 6; j++) {
            counter++;
            if (counter > 4) {
                counter = 0;
                break;
            }

            let value = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            if (maxValue === undefined) {
                maxValue = value
            } else if (value > maxValue) {
                maxValue = value;
            }
        }
    }

    return maxValue;

}
