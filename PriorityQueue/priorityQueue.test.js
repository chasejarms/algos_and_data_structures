const PriorityQueue = require('./priorityQueue');

const priorityQueue = new PriorityQueue();

describe('Empty PriorityQueue', () => {

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

  it ('should give two')

})
