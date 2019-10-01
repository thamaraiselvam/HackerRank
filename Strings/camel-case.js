/*
 Title: CamelCase
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/camelcase/problem
*/

function camelcase(s) {
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (letter === letter.toUpperCase()) count++;
  }
  return count;
}
