/**
 * Problem 1: Sort numbers from largest to smallest without using built-in JavaScript functions
 * Input: array of number
 * Output: array of number (largest to smallest)
 */

function sortDescending(arr) {
  // Implementation using Bubble Sort (manual sorting without built-in functions)
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Swap if current element is smaller than next (for descending order)
      if (result[j] < result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

module.exports = { sortDescending };
