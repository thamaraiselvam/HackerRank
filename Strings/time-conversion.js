/*
 Title: Time Conversion
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/time-conversion/
*/


function timeConversion(time) {
    let cycle = time.substring(time.length - 2, time.length);
    let timeWithoutCycle = time.substring(0, time.length - 2);
    let timeArr = timeWithoutCycle.split(':');

    if (cycle === 'AM') {
        if (timeArr[0] != 12) {
            return timeWithoutCycle;
        }

        timeArr[0] = '00';
        return timeArr.join(':');
    }

    if (timeArr[0] != 12) {
        timeArr[0] = parseInt(timeArr[0]) + 12;
    }

    return timeArr.join(':')
}

console.log("07:05:45PM");
