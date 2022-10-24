const bubbleSort = require('../../Sorting/bubble-sort')
const { describe, it } = require('mocha')
const { expect } = require('chai')

describe('Bubble Sort', () => {
    it('It should return array in sorting order', () => {
        expect(bubbleSort([3, 2, 1])).to.eql([1, 2, 3]);
    });

    it('It should return array in sorting order for duplicated values', () => {
        expect(bubbleSort([3, 1, 2, 1])).to.eql([1, 1, 2, 3]);
    });

    it('It should return array in sorting order for negative values', () => {
        expect(bubbleSort([-3, 2, 1])).to.eql([-3, 1, 2]);
    });
})
