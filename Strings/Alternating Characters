/*
 Problem name: Alternating Characters
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 20/20
 More Information: https://www.hackerrank.com/challenges/alternating-characters/problem
*/

function alternatingCharacters(string) {
    let prev = '';
    let counter = 0;
    for (let index = 0; index < string.length; index++) {
        if(!prev){
            prev = string[index];
            continue;
        }

        if(prev === string[index]){
            counter++;
        }

        prev = string[index];
    }

    return counter;
}

console.log(alternatingCharacters('BBBBB'));
