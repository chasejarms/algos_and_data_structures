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


/*

One thing to note here is that if we don't add in a hash
in addition to the heap, we will only be able to find if
a number is present in the heap in O(n) time. We can improve on this
a little bit to n/2 on average but this is still O(n). The hash
will take up a little bit more space but ensures our time complexity
for insert and remove are O(lg N).

*/

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.numberInfo = {}
  }

  insert(num) {
    let numInfo = this.numberInfo[num];

    if (numInfo) {
      let oldPriority = numInfo.priority;
      numInfo.priority = oldPriority + 1;

      // after adding one to the priority, we need to see if we would need to
      // heapify up (assuming these are sorted based on priority)

      this._heapifyUp(num, numInfo.index);
    } else {
      this.heap.push(num);
      this.numberInfo[num] = {
        priority: num,
        index: this.heap.length - 1
      };

      // need to heapify up in the event that this number should
      // be higher in our heap

      this._heapifyUp(num, this.heap.length - 1);
    }
  }

  remove(num) {

  }

  _heapifyUp(num, idx) {
    let parentIndex = this._parentIndex(idx);

    if (parentIndex > 0) {

      let parentNum = this.heap[idx];
      let parentInfo = this.numInfo[parentNum];
      let childInfo = this.numInfo[idx];

      if (parentInfo.priority < childInfo.priority) {

        this.heap[idx] = parentNum;
        this.heap[parentIndex] = num;
      }
    }
  }

  _heapifyDown(idx) {

  }

  _parentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _childIndices(idx) {
    let firstIndex = (idx * 2) + 1;
    let secondIndex = (idx * 2) + 2;

    // to account for zero as a falsey value
    // we need to check for undefined instead

    if (firstChild !== undefined && secondChild !== undefined) {
      return [firstChild, secondChild];
    } else if (firstChild !=== undefined) {
      return [firstChild];
    } else if (secondChild !== undefined) {
      return [secondChild];
    } else {
      return undefined;
    }
  }
}

// consider implementing jest tests
