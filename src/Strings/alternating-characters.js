/*
 Title: Alternating Characters
 Difficulty: Easy
 Score: 20
 Link: https://www.hackerrank.com/challenges/alternating-characters/problem
*/

function alternatingCharacters(string) {
	let prev = '';
	let counter = 0;
	for (let index = 0; index < string.length; index++) {
		if (!prev) {
			prev = string[index];
			continue;
		}

		if (prev === string[index]) {
			counter++;
		}

		prev = string[index];
	}

	return counter;
}

console.log(alternatingCharacters('BBBBB'));
