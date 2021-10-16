/*
 Title: Breaking the Records
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records
*/

function breakingRecords(scores) {
	const counters = {
		min: 0,
		max: 0,
	};

	const values = {
		min: 0,
		max: 0,
	};
	let isDefaultSet = false;

	scores.forEach((score) => {
		if (!isDefaultSet) {
			values.min = score;
			values.max = score;
			isDefaultSet = true;
			return;
		}

		if (score > values.max) {
			values.max = score;
			counters.max++;
		} else if (score < values.min) {
			values.min = score;
			counters.min++;
		}
	});

	return [counters.max, counters.min];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
