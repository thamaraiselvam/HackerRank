/*
 Title: Frequency Queries
 Difficulty: Medium
 Score: 40
 Link: https://www.hackerrank.com/challenges/frequency-queries/
*/

function freqQuery(arr) {
	const result = [];
	const hash = {};
	const freq = [];

	for (let i = 0; i < arr.length; i += 1) {
		const [action, value] = arr[i];
		const initValue = hash[value] || 0;

		if (action === 1) {
			hash[value] = initValue + 1;
			freq[initValue] = (freq[initValue] || 0) - 1;
			freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
		}

		if (action === 2 && initValue > 0) {
			hash[value] = initValue - 1;
			freq[initValue - 1] += 1;
			freq[initValue] -= 1;
		}

		if (action === 3) result.push(freq[value] > 0 ? 1 : 0);
	}

	return result;
}

const input = [
	[1, 5],
	[1, 6],
	[3, 2],
	[1, 10],
	[1, 10],
	[1, 6],
	[2, 5],
	[3, 2],
];
console.log(freqQuery(input));
