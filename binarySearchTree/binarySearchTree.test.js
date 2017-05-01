const BinarySearchTree = require('./binarySearchTree.js');

const binarySearchTree = new BinarySearchTree();

describe('BinarySearchTree', () => {
  it('starts with a null root', () => {
    expect(binarySearchTree.root).toBeNull();
  });

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
})
