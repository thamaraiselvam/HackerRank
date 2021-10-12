/*
 Title: Apple and Orange
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/apple-and-orange
*/
function countFruitsFallInsideHome(fruits, startHome, EndHome) {
	let counter = 0;
	fruits.forEach((fruit) => {
		if (fruit >= startHome && fruit <= EndHome) {
			counter += 1;
		}
		return counter;
	});

	return console.log(counter);
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	countFruitsFallInsideHome(apples, s - a, t - a);
	countFruitsFallInsideHome(oranges, s - b, t - b);
}

countApplesAndOranges(7, 11, 5, 15, 3, 2, [-2, 2, 1], [5 - 6]);
