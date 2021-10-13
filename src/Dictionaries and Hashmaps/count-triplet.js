/*
 Title: Count Triplets
 Difficulty: Medium
 Score: 35
 Link: https://www.hackerrank.com/challenges/count-triplets-1/
*/

function countTriplets(arr, r) {
	const second = {};
	const third = {};
	let count = 0;
	for (let index = 0; index < arr.length; index++) {
		const val = arr[index];

		// If value found on third then add it to count
		if (third[val]) {
			count += third[val];
		}

		// If value found on second , convey it to third

		if (second[val]) {
			third[val * r] = third[val * r] + second[val] || second[val];
		}

		// add current element into second value

		second[val * r] = second[val * r] + 1 || 1;
	}

	return count;
}

console.log(countTriplets([1, 2, 2, 4], 2));
