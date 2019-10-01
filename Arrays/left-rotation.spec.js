const leftRotation = require('./left-rotation')
const { describe, it } = require('mocha')
const { expect } = require('chai')

describe('Left Rotation', () => {
  it('should work for any empty array', () => {
    expect(leftRotation([], 10)).to.deep.equal([])
  })
  it('should work for a 1 element array', () => {
    const original = [1]
    expect(leftRotation(original, 10)).to.deep.equal(original)
  })
  it('should work for multiple elements', () => {
    const original = "ABCDEF".split('')
    const expected = "DEFABC".split('')
    expect(leftRotation(original, 3)).to.deep.equal(expected)
  })
})
