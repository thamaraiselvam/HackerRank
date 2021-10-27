/*
 Title: Kangaroo
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/kangaroo
*/

// Solution 1
function kangaroo(x1, v1, x2, v2) {
	if ((x2 > x1 && v2 > v1) || v1 === v2) {
		return 'NO';
	}

	let x1Distance = x1;
	let x2Distance = x2;

	while (x1Distance !== x2Distance) {
		x1Distance += v1;
		x2Distance += v2;

		if (x1Distance > x2Distance) {
			return 'NO';
		}
	}

	return 'YES';
}

// Solution 2

/*

(x1 - x2) % (v2 - v1) will solve the problem

based on requirements

x1 + (y * v1) = x2 + (y * v2)
x1 + (y * v1) - x2 = y * v2
x1 - x2 = (y * v2) - (y * v1)
x1 - x2 = y * (v2 - v1)
x1 - x2 / v2 - v1 = y

so we can find y with all 4 inputs if it is integer and greater than 0 then both will meet
*/

function kangarooSolution2(x1, v1, x2, v2) {
	if (x2 > x1 && v2 > v1) {
		return 'NO';
	}

	const steps = (x1 - x2) % (v2 - v1);
	return (steps >= 0 && Number.isInteger(steps)) ? 'YES' : 'NO';
}
module.exports = [kangaroo, kangarooSolution2];
