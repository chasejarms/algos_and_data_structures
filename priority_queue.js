/*

The queue must have an insert method which takes a number.

If the number is not already present in the queue,
it is added to the queue with a priority equal to the number.

If the number is present, the existing item's priority is increased by one.

The queue must have a remove method which does not take any arguments,
and removes and returns the number with the highest priority.

The insert and remove functions should run in O(lg n)

You can assume that all inputs are safe (no need to add any checks).
Please don't pull in any external libraries.

*/

class maxHeap {
  constructor(initialPriority) {
    this.fullBinaryTree = [initialPriority];
  }

  heapifyUp() {

  }

  heapifyDown() {

  }
}

// consider implementing jest tests
