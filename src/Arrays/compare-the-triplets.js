/*
Title: Compare the Triplets
Difficulty: Easy
Max Score: 10
Link: https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/

function compareTriplets(a, b) {
	const points = [0, 0];
	for (let index = 0; index < a.length; index++) {
		if (a[index] > b[index]) {
			points[0] += 1;
		} else if (a[index] < b[index]) {
			points[1] += 1;
		}
	}

	return points;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
