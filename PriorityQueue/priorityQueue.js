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

  remove() {
    const heapLength = this.heap.length;

    if (heapLength === 0) {
      return undefined;
    }

    const firstValue = this.heap[0];
    const lastValue = this.heap.pop();
    delete this.numberInfo[firstValue];

    if (heapLength === 1) {
      return lastValue;
    }

    // set the last value as the head (done)
    // set the new index on the numberInfo for that value (done)
    // delete the number info for the popped off value (done)
    // heapify down with the the new root value

    this.heap[0] = lastValue;
    this.numberInfo[lastValue].index = 0;
    this._heapifyDown(this.heap[0], 0);

    return firstValue;
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

    let numInfo = this.numberInfo[num];
    let maxInfo;

    if (children.length === 1) {
      maxInfo = this.numberInfo[children[0]];
    } else {
      maxInfo = this._maxChildInfo(children[0], children[1]);
    }

    if (maxInfo.priority > numInfo.priority) {
      const maxIndex = maxInfo.index;
      this._swapValues(maxInfo, numInfo, num, maxIndex);
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

  _maxChildInfo(idx1, idx2) {
    const childOneNum = this.heap[idx1];
    const childTwoNum = this.heap[idx2];

    const childOneInfo = this.numberInfo[childOneNum];
    const childTwoInfo = this.numberInfo[childTwoNum];

    if (childOneInfo.priority > childTwoInfo.priority) {
      return childOneInfo;
    } else {
      return childTwoInfo;
    }
  }

  _swapValues(maxInfo, numInfo, num, maxIndex) {
    const idx = numInfo.index;

    this.heap[idx] = this.heap[maxInfo.index];
    this.heap[maxIndex] = num;

    numInfo.index = maxIndex;
    maxInfo.index = idx;
  }
}

module.exports = PriorityQueue;
