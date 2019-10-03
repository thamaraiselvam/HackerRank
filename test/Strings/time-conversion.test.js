const timeConversion = require("../../Strings/time-conversion");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Time Conversion", () => {
  it("should convert midnight", () => {
    expect(timeConversion("12:00:00AM")).to.eq("00:00:00")
  });

  it("should convert noon", () => {
    expect(timeConversion("12:00:00PM")).to.eq("12:00:00")
  });

  it("should convert an AM time", () => {
    expect(timeConversion("07:05:45AM")).to.eq("07:05:45")
  });

  it("should convert a PM time", () => {
    expect(timeConversion("07:05:45PM")).to.eq("19:05:45")
  });
});