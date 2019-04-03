/*
 Problem name: Counting Valleys
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 15/15
 More Information: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup
*/

function countingValleys(n, s) {
    let currentValley = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {

        if (s[i] === 'U') {
            currentValley++;
        }
        if (s[i] === 'D') {
            currentValley--;
        }

        if (currentValley == 0 && s[i] === 'U') {
            count++;
        }
    }

    return count;

}