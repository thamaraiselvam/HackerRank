/*
 Title: Sherlock and Valid String
 Difficulty: Medium
 Score: 35
 Link: https://www.hackerrank.com/challenges/sherlock-and-valid-string
*/

function isValid(string) {
    let counter = {};

    let arr = string.split('').sort();
    let smallValue = 0;
    let allowedTimes = 0;
    arr.forEach(element => {
        counter[element] = counter[element] === undefined ? 1 : counter[element]+1;
    });

    for(let key in counter){
        if(smallValue === 0){
            smallValue = counter[key];
            continue ;
        }

        if(smallValue !== counter[key]){
            if(counter[key] === 1){
                allowedTimes += 1;
            } else {
                allowedTimes += Math.abs(smallValue - counter[key]);
            }
        }

        if(allowedTimes > 1){
            break;
        }
    }

    return allowedTimes > 1 ? false : true;
}


console.log(isValid("abcdefghhgfedecba"));
