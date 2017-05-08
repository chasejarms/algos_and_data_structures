const LinkedList = require('./linkedList');
const Node = require('./Node');
const Elevator = require('./Elevator');

class ElevatorSimulation {
  constructor(numElevators, numFloors) {
    this.unoccupiedElevators = this._createFloors(numFloors);
    this.occupiedElevators = this._createFloor(numFloors);
    this.maintenanceElevator = [];

    this._setElevators(numElevators);
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
