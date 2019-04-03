/*
 Problem name: Sock Merchant
 Difficulty: Easy
 Pass Test All Case: Yes
 Score: 10/10
 More Information: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup
*/


function sockMerchant(n, ar) {
    let tmpArr = [];
    let counter = 0;
    ar.map(value => {
        if (tmpArr.includes(value)) {
            var index = tmpArr.indexOf(value);
            if (index > -1) {
                tmpArr.splice(index, 1);
            }
            counter++;
        } else {
            tmpArr.push(value);
        }

    })

    return counter;

}