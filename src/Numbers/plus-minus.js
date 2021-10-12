/*
 Title: Plus Minus
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/plus-minus/problem
*/

module.exports = function plusMinus(arr) {
	const result = {
		positive: 0,
		negative: 0,
		zero: 0,
	};

	const arrLength = arr.length;
	for (let index = 0; index < arrLength; index++) {
		if (arr[index] === 0) {
			++result.zero;
		} else if (arr[index] > 0) {
			++result.positive;
		} else {
			++result.negative;
		}
	}

	return result;
};
