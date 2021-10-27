/*
 Title: Sherlock and Anagrams
 Difficulty: Medium
 Score: 50
 Link: https://www.hackerrank.com/challenges/sherlock-and-anagrams/
*/
function sherlockAndAnagrams(s) {
    let count = 0;
    let strLength = s.length; //get length
    for (let i = 1; i < strLength; i++) {
        let found = {};
        for (let j = 0; j + i <= strLength; j++) {
            let substr = s.substr(j, i); //device string into substr
            substr = substr.split('').sort().join(''); //sort it
            if (found[substr]) {
                count += found[substr]; //count total
                found[substr]++;
            } else {
                found[substr] = 1;
            }
        }
    }

    return count;
}

console.log(sherlockAndAnagrams('cdcd'));
