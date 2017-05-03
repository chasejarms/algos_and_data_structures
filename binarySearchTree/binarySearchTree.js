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

BinarySearchTree.prototype.preOrderTraversal = function(currentNode) {
  let nodes = [];

  if (currentNode === undefined) {
    currentNode = this.root;
  }

  // accounts for the case where there is no current node
  // or where we haven't established a root node yet

  if (currentNode === null) {
    return nodes;
  }

  nodes.push(currentNode.value);
  let leftNodes = this.preOrderTraversal(currentNode.left);
  let rightNodes = this.preOrderTraversal(currentNode.right);

  return nodes.concat(leftNodes, rightNodes);
}

BinarySearchTree.prototype.postOrderTraversal = function(currentNode) {
  let nodes = [];

  if (currentNode === undefined) {
    currentNode = this.root;
  }

  if (currentNode === null) {
    return nodes;
  }

  let leftNodes = this.postOrderTraversal(currentNode.left);
  let rightNodes = this.postOrderTraversal(currentNode.right);
  nodes.push(currentNode.value);

  return leftNodes.concat(rightNodes, nodes);
}

BinarySearchTree.prototype.inOrderTraversal = function(currentNode) {
  let nodes = [];

  if (currentNode === undefined) {
    currentNode = this.root;
  }

  if (currentNode === null) {
    return nodes;
  }

  let leftNodes = this.inOrderTraversal(currentNode.left);
  nodes.push(currentNode.value);
  let rightNodes = this.inOrderTraversal(currentNode.right);

  return leftNodes.concat(nodes, rightNodes);
}

BinarySearchTree.prototype.lcm = function(val1, val2) {
  let currentNode = this.root;

  if (currentNode === null) {
    return undefined;
  }

  if (currentNode.value === val1) {
    return currentNode.value;
  } else if (currentNode.value === val2) {
    return currentNode.value;
  }

  if (currentNode.value > val1 && currentNode.value < val2) {
    
  }
}

module.exports = BinarySearchTree;
