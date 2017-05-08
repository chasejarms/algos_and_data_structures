const Node = require('./node');
const Elevator = require('./elevator');

describe('Node', () => {
  const elevatorOne = new Elevator(1);
  const nodeOne = new Node(elevatorOne);
  it('initializes with no prev and no next', () => {
    expect(nodeOne.prev).toBeFalsy();
    expect(nodeOne.next).toBeFalsy();
  });

  it('initializes with a value', () => {
    expect(nodeOne.elevator).toBe(elevatorOne);
  });
});
