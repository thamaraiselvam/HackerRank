/*
 Title: Game Of Thrones - I
 Difficulty: Easy
 Score: 30
 Link: https://www.hackerrank.com/challenges/game-of-thrones/problem
*/

function gameOfThrones(s) {
  const frequencies = {};
  for (let char of s) frequencies[char] = frequencies[char] + 1 || 1;
  let oddFrequencies = Object.values(frequencies).filter(frequency => frequency % 2);
  return oddFrequencies.length <= 1 ? 'YES' : 'NO';
}

console.log(gameOfThrones('aaabbbb'));            // YES
console.log(gameOfThrones('cdefghmnopqrstuvw'));  // NO
console.log(gameOfThrones('cdcdcdcdeeeef'));      // YES