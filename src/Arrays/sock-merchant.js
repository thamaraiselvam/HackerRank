/*
 Title: Sock Merchant
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/sock-merchant
*/

module.exports = function sockMerchant(n, ar) {
	const tmpArr = [];
	let counter = 0;
	ar.map((value) => {
		if (tmpArr.includes(value)) {
			const index = tmpArr.indexOf(value);
			if (index > -1) {
				tmpArr.splice(index, 1);
			}
			counter++;
		} else {
			tmpArr.push(value);
		}
		return value;
	});

	return counter;
};
