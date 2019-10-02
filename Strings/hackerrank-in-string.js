/*
 Title: HackerRank in a String!
 Difficulty: Easy
 Score: 20
 Link: https://www.hackerrank.com/challenges/hackerrank-in-a-string
*/

module.exports = function hackerrankInString(s) {
  const mask = Array.from("hackerrank");
  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i);
    if (mask[0] === currentChar) {
      mask.shift();
    }
  }
  return mask.length === 0 ? "YES" : "NO";
};
