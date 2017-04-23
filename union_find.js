// let sz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// let nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// union

// isConnected

class QuickUnion {
  constructor(n) {
    this.size = this.createSizeArray(n);
    this.nodes = this.createNodesArray(n);
  }

  createSizeArray(n) {
    let sizeArray = []
    for (let i = 0; i < n; i ++) {
      sizeArray.push(0);
    }
    return sizeArray;
  }

  createNodesArray(n) {
    let nodesArray = [];
    for (let i = 0; i < n; i++) {
      nodesArray.push(0);
    }
    return nodesArray;
  }

  union(node1, node2) {

  }

  find(node1, node2) {

  }

  _root(n) {

  }

  _connectGrandparent() {

  }
}
