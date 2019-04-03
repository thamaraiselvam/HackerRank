/*
 Problem name: Repeated String
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 20/20
 More Information: https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup
*/

function repeatedString(s, n) {
    let initialCount = s.split('a').length - 1;
    let cocent = Math.floor(n / s.length);
    let total = cocent * initialCount;
    let remainder = n % s.length;
    let remaindLetter = s.slice(0, remainder);
    total += remaindLetter.split('a').length - 1;
    return total;
}