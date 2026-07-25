const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { maxSubarraySum } = require('../src/maxSubarraySum');

describe('Problem 2 - maxSubarraySum', () => {
  it('should return 700 for ([100, 200, 300, 400], 2)', () => {
    const input = [100, 200, 300, 400];
    const length = 2;
    const expected = 700;
    assert.equal(maxSubarraySum(input, length), expected);
  });

  it('should return 39 for ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)', () => {
    const input = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const length = 4;
    const expected = 39;
    assert.equal(maxSubarraySum(input, length), expected);
  });

  it('should return 5 for ([-3, 4, 0, -2, 6, -1], 2)', () => {
    const input = [-3, 4, 0, -2, 6, -1];
    const length = 2;
    const expected = 5;
    assert.equal(maxSubarraySum(input, length), expected);
  });

  it('should return sum of all elements when length equals array length', () => {
    const input = [1, 2, 3, 4];
    const length = 4;
    const expected = 10;
    assert.equal(maxSubarraySum(input, length), expected);
  });

  it('should handle single element window', () => {
    const input = [5, 1, 3, 8, 2];
    const length = 1;
    const expected = 8;
    assert.equal(maxSubarraySum(input, length), expected);
  });

  it('should handle all negative numbers', () => {
    const input = [-5, -3, -1, -4];
    const length = 2;
    const expected = -4;
    assert.equal(maxSubarraySum(input, length), expected);
  });

  it('should return null when array length is less than window length', () => {
    const input = [1, 2];
    const length = 5;
    const expected = null;
    assert.equal(maxSubarraySum(input, length), expected);
  });

  it('should handle two element array', () => {
    const input = [10, 20];
    const length = 2;
    const expected = 30;
    assert.equal(maxSubarraySum(input, length), expected);
  });
});
