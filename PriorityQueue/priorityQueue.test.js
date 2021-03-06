const PriorityQueue = require('./priorityQueue');

const priorityQueue = new PriorityQueue();
const priorityQueueTwo = new PriorityQueue();

describe('new PriorityQueue()', () => {

  it('should create an empty heap', () => {
    expect(priorityQueue.heap).toEqual([]);
  });

  it ('should create an empty object', () => {
    expect(priorityQueue.numberInfo).toEqual({});
  });

});

describe('_parentIndex', () => {

  it ('should work for both children', () => {
    expect(priorityQueue._parentIndex(0)).toBeLessThan(0);
    expect(priorityQueue._parentIndex(1)).toBe(0);
    expect(priorityQueue._parentIndex(2)).toBe(0);
    expect(priorityQueue._parentIndex(3)).toBe(1);
    expect(priorityQueue._parentIndex(4)).toBe(1);
  });

  it ('should work for larger child indices', () => {
    expect(priorityQueue._parentIndex(20)).toBe(9);
    expect(priorityQueue._parentIndex(19)).toBe(9);
  });

});

describe('_childIndices', () => {

  it ('should always give us two indices', () => {
    expect(priorityQueue._childIndices(0)).toEqual([1,2]);
    expect(priorityQueue._childIndices(1)).toEqual([3,4]);
    expect(priorityQueue._childIndices(2)).toEqual([5,6]);
    expect(priorityQueue._childIndices(5)).toEqual([11, 12]);
  })

})

describe('insert', () => {
  it ('should add a number to the set that was not there before', () => {
    priorityQueue.insert(5);
    expect(priorityQueue.heap).toEqual([5]);
    expect(priorityQueue.numberInfo).toEqual({
      5: {
        priority: 5,
        index: 0
      }
    })
  });

  it ('should properly heapify up', () => {
    priorityQueue.insert(9);
    expect(priorityQueue.heap).toEqual([9,5]);
    expect(priorityQueue.numberInfo).toEqual({
      5: {
        priority: 5,
        index: 1
      },
      9: {
        priority: 9,
        index: 0
      }
    })
  });

  it ('should work for more complex inputs', () => {
    priorityQueue.insert(3);
    expect(priorityQueue.heap).toEqual([9,5,3]);
    priorityQueue.insert(12);
    expect(priorityQueue.heap).toEqual([12,9,3,5]);
    priorityQueue.insert(11);
    expect(priorityQueue.heap).toEqual([12,11,3,5,9]);
    priorityQueue.insert(50);
    expect(priorityQueue.heap).toEqual([50,11,12,5,9,3]);
    priorityQueue.insert(49);
    expect(priorityQueue.heap).toEqual([50,11,49,5,9,3,12]);
  });

  it ('should adjust the priority if a number is added multiple times', () => {
    priorityQueue.insert(49);
    expect(priorityQueue.numberInfo[49].priority).toEqual(50);
    priorityQueue.insert(49);
    expect(priorityQueue.numberInfo[49].priority).toEqual(51);
    expect(priorityQueue.heap).toEqual([49,11,50,5,9,3,12]);
  });
});

describe('remove', () => {
  it ('should pop off the top value', () => {
    expect(priorityQueue.remove()).toEqual(49);
    expect(priorityQueue.heap).toEqual([50,11,12,5,9,3]);
    expect(priorityQueue.numberInfo[49]).toBeUndefined();
    expect(priorityQueue.remove()).toEqual(50);
    expect(priorityQueue.heap).toEqual([12,11,3,5,9]);
    expect(priorityQueue.numberInfo[50]).toBeUndefined();
  });

  it ('should work with empty and almost empty priority queues', () => {
    expect(priorityQueueTwo.remove()).toEqual(undefined);
    priorityQueueTwo.insert(5);
    expect(priorityQueueTwo.remove()).toEqual(5);
    expect(priorityQueueTwo.heap).toEqual([]);
    expect(priorityQueueTwo.numberInfo).toEqual({});
  })
})
