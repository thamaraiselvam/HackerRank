/*
 Title: Grading
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/grading
*/

module.exports = function gradingStudents(grades) {
	const newGrades = grades.map((grade) => {
		if (grade < 38) {
			return grade;
		}

		const roundRemainder = grade % 5;

		if (roundRemainder === 0 || roundRemainder <= 2) {
			return grade;
		}

		return grade + (5 - roundRemainder);
	});

	return newGrades;
};
