function twoNumberSum(arr, targetSum) {
  // Using nested for loops:
  for (let i = 0; i < arr.length - 1; i++) {
    let firstNumber = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondNumber = arr[j];
      if (firstNumber + secondNumber === targetSum) {
        return [firstNumber, secondNumber];
      }
    }
  }
  return [];
}
