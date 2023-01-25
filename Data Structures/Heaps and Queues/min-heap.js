class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // O(n) time | O(1) space
  buildHeap(array) {
    // I want to build min heaps from an array by using the siftdown method for an optimal program.
    // The buildHeap method targets every parent node in the heap and it runs
    // the siftDown method on them until every node is correctly placed in the heap
    let firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  // O(log(n)) time | O(1) space
  siftDown(currentIdx, endIdx, heap) {
    // The siftDown method should be able to compare a parent node to its two
    // children nodes and satisfy the Heap property of Min Heaps.
    let childOneIdx = currentIdx * 2 + 1;

    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;

      let idxToSwap;

      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  // O(log(n)) time | O(1) space
  siftUp(currentIdx, heap) {
    // The siftUp method should be able to compare a specific node to its
    // parent and be able to satisfy the Heap property of Min Heaps.
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  // O(1) space | O(1) time
  peek() {
    // This is a constant time operation
    // The peek property checks the root node and returns it.
    return this.heap[0];
  }

//   O(log(n)) time | O(1) space
  remove() {
    // The remove method of a Min Heap swaps the root node with the last
    // value in the Heap, then it can simply pop it.
    // Then it calls the siftDown method on the Heap to satisfy the Min Heap property
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  // O(log(n)) time | O(1) space
  insert(value) {
    // The insert method appends the value to the end of the tree (array)
    // It then runs the siftUp method on the tree to satisfy the Min Heap property.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temporary = heap[j];
    heap[j] = heap[i];
    heap[i] = temporary;
  }
}