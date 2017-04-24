// let sz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// let nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class QuickUnion {
  constructor(n) {
    this.size = this.createSizeArray(n);
    this.parent = this.createNodesArray(n);
  }

  createSizeArray(n) {
    let sizeArray = []
    for (let i = 0; i < n; i ++) {
      sizeArray.push(1);
    }
    return sizeArray;
  }

  createNodesArray(n) {
    let nodesArray = [];
    for (let i = 0; i < n; i++) {
      nodesArray.push(i);
    }
    return nodesArray;
  }

  union(node1, node2) {
    let rootOne = this._root(node1);
    let rootTwo = this._root(node2);

    if (rootOne === rootTwo) {
      return 'already unified';
    }

    if (this.size[rootOne] < this.size[rootTwo]) {
      
    } else {

    }
  }

  find(node1, node2) {
    return this._root(node1) === this._root(node2);
  }

  isConnected () {

  }

  _root(n) {
    if (n === this.parent[n]) {
      return n;
    }
    return this._root(this.parent[n]);
  }

  _connectGrandparent() {

  }

}

let quickUnion = new QuickUnion(10);
console.log(quickUnion);
