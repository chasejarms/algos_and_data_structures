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
      this.parent[rootOne] = rootTwo;
    } else if (this.size[rootOne] > this.size[rootTwo]) {
      this.parent[rootTwo] = rootOne;
    } else {
      this.parent[rootTwo] = rootOne;
      debugger
      this.size[rootOne] += 1;
    }
  }

  connected(node1, node2) {
    return this._root(node1) === this._root(node2);
  }

  _root(n) {
    if (n === this.parent[n]) {
      return n;
    }
    this._connectGrandparent(n);
    return this._root(this.parent[n]);
  }

  _connectGrandparent(node) {
    let parent = this.parent[node];
    let grandparent = this.parent[parent];
    this.parent[node] = grandparent;
  }

}

let quickUnion = new QuickUnion(10);
quickUnion.union(0,1);
quickUnion.union(1,4);
quickUnion.union(5,6);
quickUnion.union(6,7);
quickUnion.union(7,8);
quickUnion.union(8,9);

console.log('Forest with four trees:\n');
console.log(quickUnion);

quickUnion.union(4, 9);

console.log('After connecting four and nine\n');
console.log(quickUnion);

console.log(`connected(4,9) should be true === ${quickUnion.connected(4,9)}`);
console.log(`connected(2,0) should be false === ${quickUnion.connected(2,0)}`);
console.log(`connected(1,6) should be true === ${quickUnion.connected(1,6)}`);


// Interview Questions

// Social network connectivity. Given a social network containing n members and a log file
// containing m timestamps at which times pairs of members formed friendships, design an
// algorithm to determine the earliest time at which all members are connected (i.e., every
// member is a friend of a friend of a friend ... of a friend). Assume that the log file is
// sorted by timestamp and that friendship is an equivalence relation. The running time
// of your algorithm should be mlogn or better and use extra space proportional to n.

// To solve this, I would definitely need my parent array with every parent initialized to
// be itself. From there, I would go through the time logs and begin connecting by using the
// union operator.

// How would I know the earliest point at which all people were connected in the network? I could
// probably branch off a little bit from the default union find pattern and create an additional set
// that contains each root node. I would modify union so that when two values were unified, the previous
// root of the smaller tree would be deleted from the set. I could then check the set's count, which I
// assume is constant time because it should be storing a count instance variable. If the set's count
// is greater than 1, we do not yet have every friend connected in our network.

// here's the code I would add to my union set class in addition to the exisiting setup

// this.rootNodes = new Set(this.parent)

// then when we delete something:

// this.rootNodes.delete(n);

// then check the count:

// if (this.rootNodes.count > 1) {
//   return 'We're all connected';
// }









//
