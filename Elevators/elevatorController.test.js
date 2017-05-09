const ElevatorController = require('./elevatorController');
const LinkedList = require('./linkedList');
const myNode = require('./node');

describe('ElevatorController', () => {
  const elevatorController = new ElevatorController(10, 10);
  it('initializes with linked lists', () => {
    const unoccupiedElevators = elevatorController.unoccupiedElevators;
    const occupiedElevators = elevatorController.occupiedElevators;
    for (let i = 0; i < 10; i++) {
      expect(unoccupiedElevators[i] instanceof LinkedList).toBeTruthy()
      expect(occupiedElevators[i] instanceof LinkedList).toBeTruthy()
    }
  });

  
});
