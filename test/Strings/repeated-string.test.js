const repeatedString = require("../../src/Strings/repeated-string");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Repeated String", () => {
  it("should return 7 with input string 'aba' and a string length of 10 to search in", () => {
    expect(repeatedString("aba", 10)).to.eq(7);
  });

  it("should return 1 with input string 'aaaaaa' and a string length of 1 to search in", () => {
    expect(repeatedString("aaaaaa", 1)).to.eq(1);
  });

  it("should return n if input string is 'a'", () => {
    expect(repeatedString("a", 100000)).to.eq(100000);
    expect(repeatedString("a", 300)).to.eq(300);
    expect(repeatedString("a", 5)).to.eq(5);
  });

  it("should return 0 if the input string does not contain 'a'", () => {
    expect(repeatedString("test", 20)).to.eq(0);
    expect(repeatedString("bbbb", 7)).to.eq(0);
    expect(repeatedString("cdcdcd", 5)).to.eq(0);
  });
});
