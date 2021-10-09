const { describe, it } = require('mocha');
const { expect } = require('chai');
const birthdayCakeCandles = require('../../Arrays/birthday-cake-candles');

describe('Birthday Cake Candles', () => {
	it('returns 0 for empty array', () => {
		expect(birthdayCakeCandles([])).to.equal(0);
	});

	it('returns 1 if there is only one candle', () => {
		expect(birthdayCakeCandles([1])).to.equal(1);
		expect(birthdayCakeCandles([2])).to.equal(1);
		expect(birthdayCakeCandles([3])).to.equal(1);
	});

	it('returns 2 if there are two candles with the same height', () => {
		expect(birthdayCakeCandles([1, 1])).to.equal(2);
		expect(birthdayCakeCandles([2, 2])).to.equal(2);
		expect(birthdayCakeCandles([3, 3])).to.equal(2);
	});

	it('returns correct amount for array with different sized candles', () => {
		expect(birthdayCakeCandles([3, 2, 1, 3])).to.equal(2);
		expect(birthdayCakeCandles([3, 2, 1, 3, 4, 5, 4])).to.equal(1);
		expect(birthdayCakeCandles([3, 2, 1, 1, 2, 2, 4, 4, 4])).to.equal(3);
		expect(birthdayCakeCandles([3, 2, 1])).to.equal(1);
	});
});
