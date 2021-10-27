/*
 Title: Grading
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/grading
*/

function gradingStudents(grades) {
    let newGrades = grades.map(grade => {
        if (grade < 38) {
            return grade;
        }

        let roundRemainder = grade % 5;

        if (roundRemainder === 0 || roundRemainder <= 2) {
            return grade;
        }

        return grade + (5 - roundRemainder);
    })

    return newGrades;

}
