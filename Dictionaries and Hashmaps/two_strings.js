/*
 Problem name: Two Strings
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 25/25
 More Information: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/

function twoStrings(s1, s2) {
    m = new Map();
    for(let i=0; i<s1.length; i++){
        m.set(s1[i], 1);
    }

    for(let i=0; i<s2.length; i++){
        if(m.get(s2[i])) {
            return 'YES';
        }
    }

    return 'NO';
}


console.time('find');
console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
console.timeEnd('find');
