const plusMinus = require('../../Numbers/plus-minus')
const { describe, it } = require('mocha')
const { expect } = require('chai')

describe('Plus Minus Problem', () => {
    it('It should Return 2 Positive 2 Negative and 1 Zero', () => {
        expect(plusMinus([1, 1, -1, -1, 0])).to.deep.equal({positive: 2, negative: 2, zero: 1 });
    });

    it('It should Return 5 Positive', () => {
        expect(plusMinus([1, 1, 1, 5, 6])).to.deep.equal({positive: 5, negative: 0, zero: 0 });
    });

    it('It should Return 5 Negative', () => {
        expect(plusMinus([-1, -1, -1, -5, -6])).to.deep.equal({positive: 0, negative: 5, zero: 0 });
    });
})
