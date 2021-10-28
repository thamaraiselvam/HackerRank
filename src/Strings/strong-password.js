/*
 Title: Strong Password
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/strong-password
*/

module.exports = function passwordStrengthMinimumNumber(n, password) {
	const STRONG_LENGTH = 6;
	const missingChars = STRONG_LENGTH - n;
	let score = 0;

	const passwordAsArray = Array.from(password);

	const hasNumber = passwordAsArray.some((char) => '0123456789'.includes(char));
	const hasLowerCase = passwordAsArray.some((char) => 'abcdefghijklmnopqrstuvwxyz'.includes(char));
	const hasUpperCase = passwordAsArray.some((char) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char));
	const hasSpecialChar = passwordAsArray.some((char) => '!@#$%^&*()-+'.includes(char));

	if (!hasNumber) score++;
	if (!hasLowerCase) score++;
	if (!hasUpperCase) score++;
	if (!hasSpecialChar) score++;

	return Math.max(score, missingChars);
};
