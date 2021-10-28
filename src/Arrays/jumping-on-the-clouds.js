/*
 Title: Jumping on the Clouds
 Difficulty: Easy
 Score: 20
 Link: https://www.hackerrank.com/challenges/jumping-on-the-clouds/
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
