/*

Instructions:

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

Thoughts:

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
      // heapify up (assuming these are sorted based on priority and not initial
      // number )

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
    const lastValue = this.heap.pop();
    const numInfo = this.numberInfo[num];

    // account for the case that we have not yet defined that
    // number or we don't have anything in our heap

    if (!lastValue || !numInfo) {
      return undefined;
    }

    // account for our heap having just one value
    // (zero now that we popped off the last value)

    if (this.heap.length === 0) {
      delete this.numberInfo[lastValue];
      return lastValue;
    }

    // first we switch the target value and the last value
    // in our heap and reassign the index of the last value
    // to be the target value's previous index

    const lastValueInfo = this.numberInfo[lastValue];
    const targetIndex = numInfo.index;

    this.heap[targetIndex] = lastValue;
    lastValueInfo.index = targetIndex;

    // then delete the target value

    delete this.numberInfo[num];

    this._heapifyUp(this.heap[targetIndex], targetIndex);
    this._heapifyDown(this.heap[targetIndex], targetIndex);

    return num;
  }

  _heapifyUp(num, idx) {
    let parentIndex = this._parentIndex(idx);

    if (parentIndex >= 0) {

      let parentNum = this.heap[parentIndex];
      let parentInfo = this.numberInfo[parentNum];
      let childInfo = this.numberInfo[num];

      if (parentInfo.priority < childInfo.priority) {

        this.heap[idx] = parentNum;
        this.heap[parentIndex] = num;

        parentInfo.index = idx;
        childInfo.index = parentIndex;

        this._heapifyUp(num, parentIndex);
      }
    }
  }

  _heapifyDown(num, idx) {
    const children = this._childIndices(idx).filter(index => {
      return index < this.heap.length;
    });

    if (children.length === 0) {
      return;
    }

    let max;

    if (children.length === 1) {
      max = children[0];
    } else {
      const childOne = this.heap[children[0]];
      const childTwo = this.heap[children[1]];
      max = Math.max(childOne, childTwo);
    }

    if (max > num) {

      const maxIndex = this.numberInfo[max].index;


      this.heap[idx] = max;
      this.heap[maxIndex] = num;

      this.numberInfo[num].index = maxIndex;
      this.numberInfo[max].index = idx;

      this._heapifyDown(num, maxIndex);
    }
  }

  _parentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _childIndices(idx) {
    let firstIndex = (idx * 2) + 1;
    let secondIndex = (idx * 2) + 2;

    return [firstIndex, secondIndex];
  }
}

module.exports = PriorityQueue;
