const { describe, it } = require('mocha');
const { expect } = require('chai');
const passwordStrengthMinimumNumber = require('../../src/Strings/strong-password');

describe('Strong Password', () => {
	it('returns 6 for empty string', () => expect(passwordStrengthMinimumNumber(0, '')).to.equal(6));

	it('returns 3 with password length of 3', () => expect(passwordStrengthMinimumNumber(3, 'Ab1')).to.equal(3));

	it('returns 3 with missing special character, number and uppercase letter', () => expect(passwordStrengthMinimumNumber(3, 'longenough')).to.equal(3));

	it('returns 1 with missing number', () => expect(passwordStrengthMinimumNumber(11, '#HackerRank')).to.equal(1));

	it('returns 1 with missing special character', () => expect(passwordStrengthMinimumNumber(11, '1HackerRank')).to.equal(1));

	it('returns 1 with missing uppercase letter', () => expect(passwordStrengthMinimumNumber(12, '#1hackerrank')).to.equal(1));

	it('returns 1 with missing lowercase letter', () => expect(passwordStrengthMinimumNumber(12, '#1HACKERRANK')).to.equal(1));
});
