/*
 Title: Counting Valleys
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/counting-valleys
*/

module.exports = function countingValleys(n, s) {
	let currentValley = 0;
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (s[i] === 'U') {
			currentValley++;
		}
		if (s[i] === 'D') {
			currentValley--;
		}

		if (currentValley === 0 && s[i] === 'U') {
			count++;
		}
	}

	return count;
};
