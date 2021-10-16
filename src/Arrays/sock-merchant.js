/*
 Title: Sock Merchant
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/sock-merchant
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
