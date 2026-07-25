/**
 * Problem 2: Find the maximum sum of a subarray with a specific length
 * Input: array of number and number (subarray length)
 * Output: number (maximum sum)
 */

function maxSubarraySum(arr, length) {
  // Validate input
  if (arr.length < length) {
    return null;
  }

  // Calculate sum of first window
  let maxSum = 0;
  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }

  // Sliding window to find maximum sum
  let currentSum = maxSum;
  for (let i = length; i < arr.length; i++) {
    currentSum = currentSum - arr[i - length] + arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

module.exports = { maxSubarraySum };
