const Node = require('./node.js');

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.push = function(value) {

  let currentNode = this.root;
  if (!currentNode) {
    this.root = new Node(value);
    return;
  }

  const newNode = new Node(value);

  while (currentNode) {

    if (newNode.value <= currentNode.value) {

      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = newNode;
        break;
      }

    } else {

      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = newNode;
        break;
      }

    }

  }
}

BinarySearchTree.prototype.breadthFirstSearch = function(val) {
  const queue = [];
  // shift and push

  if (this.root) {
    queue.push(this.root);
  }

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (currentNode.value === val) {
      return currentNode;
    }

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return null;
}

BinarySearchTree.prototype.breadthFirstOrder = function() {
  const order = [];
  const queue = [];

  if (this.root) {
    queue.push(this.root);
  }

  while (queue.length > 0) {
    let currentNode = queue.shift();

    order.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return order;
}

module.exports = BinarySearchTree;
