import { findMode } from "./math";

describe("findMode", () => {
  it("should return the mode for an array with a single mode", () => {
    const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 6, 6];
    const result = findMode(numbers);
    expect(result).toEqual(6);
  });

  it("should return an first of modes for an array with multiple modes", () => {
    const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 6, 5];
    const result = findMode(numbers);
    expect(result).toEqual(2);
  });

  it("should handle an empty array by returning an zero", () => {
    const numbers: number[] = [];
    const result = findMode(numbers);
    expect(result).toEqual(0);
  });

  it("should handle an array with only one number by returning that number", () => {
    const numbers = [42];
    const result = findMode(numbers);
    expect(result).toEqual(42);
  });
});
