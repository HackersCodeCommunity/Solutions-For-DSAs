// Due to the Quick sort Algorithm, the time complexity is O(nlog(n)) time
// Space complexity: O(1) space

function twoNumberSum(array, targetSum) {
  // Using the sorted array method
  // The sort method requires a callback function
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
