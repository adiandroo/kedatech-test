const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { sortDescending } = require('../src/sortDescending');

describe('Problem 1 - sortDescending', () => {
  it('should sort [1, 2, 4, 3, 5, 3, 2, 1] to [5, 4, 3, 3, 2, 2, 1, 1]', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const expected = [5, 4, 3, 3, 2, 2, 1, 1];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should sort [10, 5, 8, 1, 3] to [10, 8, 5, 3, 1]', () => {
    const input = [10, 5, 8, 1, 3];
    const expected = [10, 8, 5, 3, 1];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should handle single element array', () => {
    const input = [42];
    const expected = [42];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should handle empty array', () => {
    const input = [];
    const expected = [];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should handle already sorted array', () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [5, 4, 3, 2, 1];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should handle negative numbers', () => {
    const input = [-3, -1, -5, -2];
    const expected = [-1, -2, -3, -5];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should handle mixed positive and negative numbers', () => {
    const input = [3, -1, 5, -2, 0];
    const expected = [5, 3, 0, -1, -2];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should handle duplicate numbers', () => {
    const input = [7, 7, 7, 7];
    const expected = [7, 7, 7, 7];
    assert.deepEqual(sortDescending(input), expected);
  });

  it('should not mutate original array', () => {
    const input = [3, 1, 2];
    const original = [...input];
    sortDescending(input);
    assert.deepEqual(input, original);
  });
});
