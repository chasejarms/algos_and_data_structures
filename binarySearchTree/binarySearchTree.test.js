const BinarySearchTree = require('./binarySearchTree.js');

const binarySearchTree = new BinarySearchTree();
const binarySearchTreeTwo = new BinarySearchTree();

describe('BinarySearchTree', () => {
  it('starts with a null root', () => {
    expect(binarySearchTree.root).toBeNull();
  });
});

describe('push', () => {
  it('adds a node to the tree', () => {
    binarySearchTree.push(5);
    expect(binarySearchTree.root.value).toBe(5);
  });

  it('adds a node on the right of the first node', () => {
    binarySearchTree.push(6);
    const rightNode = binarySearchTree.root.right;
    expect(rightNode.value).toBe(6);
  });

  it('adds a node on the left of the first node', () => {
    binarySearchTree.push(4);
    const leftNode = binarySearchTree.root.left;
    expect(leftNode.value).toBe(4);
  });

  it('equivalent values go to the left', () => {
    binarySearchTree.push(5);
    expect(binarySearchTree.root.left.right.value).toBe(5);
  });
});

describe('breadthFirstSearch', () => {
  binarySearchTreeTwo.push(10);
  binarySearchTreeTwo.push(15);
  binarySearchTreeTwo.push(5);
  binarySearchTreeTwo.push(8);
  binarySearchTreeTwo.push(3);
  binarySearchTreeTwo.push(18);
  binarySearchTreeTwo.push(13);

  it('finds numbers that are in the tree', () => {
    expect(binarySearchTreeTwo.breadthFirstSearch(5).value).toEqual(5);
  });

  it('does returns null for numbers not in the tree', () => {
    expect(binarySearchTreeTwo.breadthFirstSearch(54)).toBeNull();
  });
});

describe('breadthFirstOrder', () => {
  it('gives back the correct order', () => {
    expect(binarySearchTreeTwo.breadthFirstOrder()).toEqual([10,5,15,3,8,13,18]);
  });
})
