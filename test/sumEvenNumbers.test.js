const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { sumEvenNumbers } = require('../src/sumEvenNumbers');

describe('Problem 3 - sumEvenNumbers', () => {
  it('should return 6 for first test case', () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: 'yup'
        }
      }
    };
    const expected = 6;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should return 12 for second test case', () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' }
    };
    const expected = 12;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should return 0 for empty object', () => {
    const input = {};
    const expected = 0;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should return 0 when no even numbers', () => {
    const input = {
      a: 1,
      b: 3,
      c: { d: 5, e: 7 }
    };
    const expected = 0;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should handle deeply nested even numbers', () => {
    const input = {
      level1: {
        level2: {
          level3: {
            level4: {
              value: 10
            }
          }
        }
      }
    };
    const expected = 10;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should handle mixed types correctly', () => {
    const input = {
      num1: 4,
      num2: 3,
      str1: '6',
      bool1: true,
      num3: 8,
      nested: { num4: 2 }
    };
    const expected = 14;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should handle array values by ignoring them', () => {
    const input = {
      a: 2,
      b: [4, 6, 8],
      c: 10
    };
    const expected = 12;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should handle null values', () => {
    const input = {
      a: 4,
      b: null,
      c: 6
    };
    const expected = 10;
    assert.equal(sumEvenNumbers(input), expected);
  });

  it('should handle zero as even number', () => {
    const input = {
      a: 0,
      b: 2,
      c: { d: 0 }
    };
    const expected = 2;
    assert.equal(sumEvenNumbers(input), expected);
  });
});
