class Queue {
  constructor() {
    this.onStack = [];
    this.offStack = [];
  }

  enqueue(num) {
    this.onStack.push(num);
  }

  dequeue() {
    if (this.offStack.length > 0) {
      return offStack.pop();
    }

    while (this.onStack.length > 0) {
      let el = this.onStack.pop();
      this.offStack.push(el);
    }

    return this.offStack.pop();
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
queue.enqueue(11);

console.log(queue.onStack);

queue.dequeue();

console.log(queue.onStack);
console.log(queue.offStack);
