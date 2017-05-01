const Node = require('./node.js');

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.push = function(value) {

  if (!this.root) {
    this.root = new Node(value);
    return;
  }

  const currentNode = this.root;
  const newNode = new Node(value);

  while (currentNode) {

    if (newNode.value < currentNode.value) {

      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }

    } else if (newNode.value >= currentNode.value) {

      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }

    }

  }
}
