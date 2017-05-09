class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  append(node) {
    // set up the initial linked list

    if (!this.head) {
      this.head = node;
    } else if (!this.tail) {
      node.prev = this.head;
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length += 1;

  }

  delete(node) {
    const prevNode = node.prev;
    const nextNode = node.next;

    // if the node is the only node in
    // our linked list
    if (!prevNode && !nextNode) {
      this.head = undefined;
      this.tail = undefined;
    }
    // if it's the head, we need to account
    // for a linked list being size two
    else if (node === this.head) {
      nextNode.prev = undefined;
      this.head = nextNode;
      if (nextNode === this.tail) {
        this.tail = undefined;
      }
    }
    // if it's the tail, we need to account
    // for a linked list being size two
    else if (node === this.tail) {
      prevNode.next = undefined;
      if (prevNode === this.head) {
        this.tail = undefined;
      } else {
        this.tail = prevNode;
      }
    }
    // if it's neither (i.e. it will have
    // a head and a tail) we need to go
    // around it so that the node is garbage
    // collected
    else {
      nextNode.prev = prevNode;
      prevNode.next = nextNode;
    }

    // finally, reset the node so that we don't
    // have to create it again each time
    this.length -= 1;
    return this._resetNode(node);
  }

  _resetNode(node) {
    node.prev = undefined;
    node.next = undefined;
    return node;
  }
}

module.exports = LinkedList;
