// We'll be using a Hashtable here to help with the time complexity
// Using the formula:  x + y = targetSum
// x = array[i]
// y = targetSum - x

// Time complexity: O(n) time
// Space complexity: O(n) space
function twoNumberSum(array, targetSum) {
  const numbers = {};

  for (let i = 0; i < array.length; i++) {
    // index less than length of array
    let currentNumber = array[i];
    let potentialMatch = targetSum - currentNumber;

    if (potentialMatch in numbers) {
      return [potentialMatch, currentNumber];
    } else {
      numbers[currentNumber] = true;
    }
  }
  return [];
}
