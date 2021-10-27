/*
 Title: Making Anagrams
 Difficulty: Easy
 Score: 25/
 Link: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_r=internal-search
*/


function makeAnagram(string1, string2){
    string1 = count(string1);
    string2 = count(string2);
    return findDiff(string1, string2);
}

function count(a) {
    let arr = a.split('').sort();
    let counter = {};
    arr.forEach(value => {
        if (counter[value] !== undefined) {
            counter[value] += 1;
        } else {
            counter[value] = 1;
        }
    })

    return counter;
}

function findDiff(arr1, arr2) {
    let removeCount = 0;

    for (let key in arr1) {
        if (!arr2[key]) {
            removeCount += arr1[key];
        } else {
            removeCount += Math.abs(arr2[key] - arr1[key]);
        }
      }

      for (let key in arr2) {
        if (!arr1[key]) {
            removeCount += arr2[key];
        }
      }
    return removeCount;
}

let a = "fcrxzwscanmligyxyvym";
let b = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";
console.log(makeAnagram(a,b ));
