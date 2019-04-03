/*
 Problem name: Jumping on the Clouds
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 20/20
 More Information: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup
*/

function jumpingOnClouds(c) {

    let jump = 0;
    for (let i = 0; i < c.length;){
        if (c[i + 2] == 0) {
            jump++;
            i += 2;
        } else if (c[i + 1] == 0) {
            jump++;
            i += 1;
        } else {
            i++;
        }
    }

    return jump;
}