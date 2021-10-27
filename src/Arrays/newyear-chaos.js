/*
 Title: New Year Chaos
 Difficulty: Medium
 Score: 40
 Link: https://www.hackerrank.com/challenges/new-year-chaos/
*/

module.exports = function minimumBribes(q) {
	let swaps = 0;
	let min = q.length;
	for (let i = q.length - 1; i >= 0; i--) {
		if (q[i] - i > 3) {
			return 'Too chaotic';
		}
		if (q[i] > i + 1) {
			swaps += (q[i] - (i + 1));
		} else if (min > q[i]) {
			min = q[i];
		} else if (q[i] !== min) {
			swaps++;
		}
	}

	return swaps;
};
