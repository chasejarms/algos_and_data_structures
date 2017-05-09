const LinkedList = require('./linkedList');
const Node = require('./Node');
const Elevator = require('./Elevator');

class ElevatorController {
  constructor(numElevators, numFloors) {
    this.totalElevators = numElevators;
    this.unoccupiedElevatorCount = numElevators;
    this.occupiedElevatorCount = 0;
    this.unoccupiedElevators = this._createFloors(numFloors);
    this.occupiedElevators = this._createFloors(numFloors);
    this.maintenanceElevator = new LinkedList();

    this._setElevators(numElevators);
  }

  requestElevator(floor) {
    // first look for unoccupied elevators on that floor

    // then see if anything is moving in that direction and is occupied

    // then find the closest unoccupied elevator
  }

  _createFloors(numFloors) {
    const floors = [];
    for (let i = 0; i < numFloors; i++) {
      floors.push(new LinkedList());
    }
    return floors;
  }

  _setElevators(numElevators) {
    let firstLinkedList = this.unoccupiedElevators[0];
    for (let i = 0; i < numElevators; i++) {
      const elevator = new Elevator(1);
      const elevatorNode = new Node(elevator);
      firstLinkedList.append(elevatorNode);
    }
  }
}

module.exports = ElevatorController;
