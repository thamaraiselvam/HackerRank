const hackerrankInString = require("../../Strings/hackerrank-in-string");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("HackerRank in a String", () => {
  it("should return NO for any empty string", () => {
    expect(hackerrankInString("")).to.equal("NO");
  });

  it("should return YES for an exact match", () => {
    expect(hackerrankInString("hackerrank")).to.equal("YES");
  });

  describe("should return YES inputs containing hackerrank", () => {
    it("hereiamstackerrank", () =>
      expect(hackerrankInString("hereiamstackerrank")).to.equal("YES"));
    it("hhaacckkekraraannk", () =>
      expect(hackerrankInString("hhaacckkekraraannk")).to.equal("YES"));
  });
  describe("should return NO for inputs that don't contain hackerrank", () => {
    it("hackerworld", () =>
      expect(hackerrankInString("hackerworld")).to.equal("NO"));
    it("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt", () =>
      expect(
        hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt")
      ).to.equal("NO"));
  });
});
