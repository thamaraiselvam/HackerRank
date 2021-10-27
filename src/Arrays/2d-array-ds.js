/*
 Title: 2D Array - DS
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/2d-array/
*/
module.exports = function hourglassSum(arr) {
	let sum = -1000;
	let max = sum;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			sum =				arr[i][j]
				+ arr[i][j + 1]
				+ arr[i][j + 2]
				+ arr[i + 1][j + 1]
				+ arr[i + 2][j]
				+ arr[i + 2][j + 1]
				+ arr[i + 2][j + 2];
			if (sum > max) max = sum;
		}
	}
	console.log(max);
};
