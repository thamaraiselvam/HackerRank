/*
 Title: Two Strings
 Difficulty: Easy
 Score: 25
 Link: https://www.hackerrank.com/challenges/two-strings/
*/

function twoStrings(s1, s2) {
	const m = new Map();
	for (let i = 0; i < s1.length; i++) {
		m.set(s1[i], 1);
	}

	for (let i = 0; i < s2.length; i++) {
		if (m.get(s2[i])) {
			return 'YES';
		}
	}

	return 'NO';
}

console.time('find');
console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));
console.timeEnd('find');
