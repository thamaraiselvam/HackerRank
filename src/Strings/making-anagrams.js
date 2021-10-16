/*
 Title: Making Anagrams
 Difficulty: Easy
 Score: 25/
 Link: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_r=internal-search
*/
function count(a) {
	const arr = a.split('').sort();
	const counter = {};
	arr.forEach((value) => {
		if (counter[value] !== undefined) {
			counter[value] += 1;
		} else {
			counter[value] = 1;
		}
	});

	return counter;
}

function findDiff(arr1, arr2) {
	let removeCount = 0;

	for (const key in arr1) {
		if (!arr2[key]) {
			removeCount += arr1[key];
		} else {
			removeCount += Math.abs(arr2[key] - arr1[key]);
		}
	}

	for (const key in arr2) {
		if (!arr1[key]) {
			removeCount += arr2[key];
		}
	}
	return removeCount;
}

function makeAnagram(string1, string2) {
	string1 = count(string1);
	string2 = count(string2);
	return findDiff(string1, string2);
}
const a = 'fcrxzwscanmligyxyvym';
const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
console.log(makeAnagram(a, b));
