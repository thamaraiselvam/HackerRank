/*
 Title: Minimum Swaps 2
 Difficulty: Medium
 Score: 40
 Link: https://www.hackerrank.com/challenges/minimum-swaps-2
*/

module.exports = function minimumSwaps(arr) {
	const origArray = arr.slice(0);
	const sortedArray = arr.sort((a, b) => a - b);
	let numberOfSwap = 0;
	for (let i = 0; i < origArray.length; i++) {
		if (origArray[i] !== sortedArray[i]) {
			for (let j = i + 1; j < origArray.length; j++) {
				if (origArray[j] === sortedArray[i]) {
					[origArray[i], origArray[j]] = [origArray[j], origArray[i]];
					numberOfSwap++;
					break;
				}
			}
		}
	}

	return numberOfSwap;
};
