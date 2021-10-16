/*
 Title: Time Conversion
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/time-conversion/
*/

module.exports = function timeConversion(time) {
	const cycle = time.substring(time.length - 2, time.length);
	const timeWithoutCycle = time.substring(0, time.length - 2);
	const timeArr = timeWithoutCycle.split(':');

	if (cycle === 'AM') {
		if (timeArr[0] !== 12) {
			return timeWithoutCycle;
		}

		timeArr[0] = '00';
		return timeArr.join(':');
	}

	if (timeArr[0] !== 12) {
		timeArr[0] = parseInt(timeArr[0], 10) + 12;
	}

	return timeArr.join(':');
};
