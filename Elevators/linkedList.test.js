const LinkedList = require('./linkedList');
const Node = require('./node');

describe('LinkedList', () => {
  const linkedList = new LinkedList();
  const firstNode = new Node(5);
  const secondNode = new Node(6);
  const thirdNode = new Node(7);
  it('initializes empty', () => {
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.tail).toBeFalsy();
  });

  it('appends new nodes to the head', () => {
    linkedList.append(firstNode);
    expect(linkedList.head).toBe(firstNode);
  });

  it('appends new nodes to the tail', () => {
    linkedList.append(secondNode);
    expect(linkedList.head).toBe(firstNode);
    expect(linkedList.tail).toBe(secondNode);
    linkedList.append(thirdNode);
    expect(linkedList.tail).toBe(thirdNode);
  });

  it('updates the prev and next values for each node', () => {
    expect(firstNode.prev).toBeFalsy();
    expect(firstNode.next).toBe(secondNode);
    expect(secondNode.prev).toBe(firstNode);
    expect(secondNode.next).toBe(thirdNode);
    expect(thirdNode.prev).toBe(secondNode);
    expect(thirdNode.next).toBeFalsy();
  });

  it('deletes nodes from the list', () => {
    linkedList.delete(firstNode);
    expect(linkedList.head).toBe(secondNode);
    expect(linkedList.tail).toBe(thirdNode);

    linkedList.delete(thirdNode);
    expect(linkedList.head).toBe(secondNode);
    expect(linkedList.tail).toBeFalsy();

    linkedList.delete(secondNode);
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.tail).toBeFalsy();
  });

  it('resets the deleted node', () => {
    expect(firstNode.prev).toBeFalsy();
    expect(firstNode.next).toBeFalsy();
    expect(secondNode.prev).toBeFalsy();
    expect(secondNode.next).toBeFalsy();
    expect(thirdNode.prev).toBeFalsy();
    expect(thirdNode.next).toBeFalsy();
  });

  it('keeps track of length', () => {
    expect(linkedList.length).toBe(0);
    linkedList.append(firstNode);
    linkedList.append(secondNode);
    linkedList.append(thirdNode);
    expect(linkedList.length).toBe(3);
  });
});
