/*
 Title: Arrays: Left Rotation
 Difficulty: Easy
 Score: 20
 Link: https://www.hackerrank.com/challenges/ctci-array-left-rotation/
*/

module.exports = function rotLeft(a, d) {
	if (!a.length) {
		return [];
	}

	for (let i = 0; i < d; i++) {
		a.push(a.shift());
	}

	return a;
};
