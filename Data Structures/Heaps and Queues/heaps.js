/*
Let ‘i’ be the index of the array the element of arr[i] children can be found in arr[2i+1] and arr[2i+2] and its parent index arr[Math.floor((i-1)/2)]

*/

class BinaryHeap {
  constructor() {
    this.heap = [30, 20, 10, 7, 9, 5];
  }

  insert(value) {
    this.heap.push(value);
    this.swimUp();
  }

  swimUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let element = this.heap[index];

      parentIndex = Math.floor((index - 1) / 2);
      parent = this.heap[parentIndex];

      if (parent >= element) break;

      // If element is less than parent
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  // It helps us to remove the highest element from the heap

  extractMax() {
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return max;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    const length = this.heap.length;

    // if left child is greater than parent:
    if (left <= length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    // if right child is greater than parent:
    if (right <= length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    // swap
    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];

      this.sinkDown(largest);
    }
  }
}
