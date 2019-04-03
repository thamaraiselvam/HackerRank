/*
 Problem name: New Year Chaos
 Difficulty: Medium
 Pass Test All Case: Yes
 Score: 40/40
 More Information: https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays
*/

function minimumBribes(q) {
    let swaps = 0;
    let min = q.length;
    for (var i = q.length -1 ; i >= 0; i--) {
        if (q[i] - i > 3) {
            return `Too chaotic`;
        }
        if (q[i] > i + 1) {
            swaps += (q[i] - (i + 1));
        } else {
            if (min > q[i]) {
                min = q[i];
            } else if (q[i] != min) {
                swaps++;
            }
        }
    }

    return swaps;
}