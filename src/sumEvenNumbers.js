/**
 * Problem 3: Get the sum of all even numbers in a nested object
 * Input: object (nested)
 * Output: number (sum of all even numbers)
 */

function sumEvenNumbers(obj) {
  let sum = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'number' && value % 2 === 0) {
        sum += value;
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        sum += sumEvenNumbers(value);
      }
    }
  }

  return sum;
}

module.exports = { sumEvenNumbers };
