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
    this.intervalCancels = {};

    this._setElevators(numElevators);
  }

  requestElevator(floor) {
    // first look for unoccupied elevators on that floor
    // keep in mind the floor and indices will be one off
    const unoccupiedElevatorOnFloor = this.unoccupiedElevators[floor - 1].head;

    if (unoccupiedElevatorOnFloor) {
      this.unoccupiedElevators[floor - 1].delete(unoccupiedElevatorOnFloor);
      // set the target of the elevator
      const elevatorInfo = unoccupiedElevatorOnFloor.elevator;
      elevatorInfo.furthestStop = floor;
    }

    // then see if anything is moving in that direction and is occupied

    else if {

    }

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

  _startTrip(node) {
    // set an interval of moving between floors

    // once there is no more floors to go to, we need to cancel the interval
    // and place the elevator back in the unoccupiedElevator

    const movement = window.setInterval(() => {
      this._moveElevator(node);
      this._checkCancelMovement(node);
    }, 5000)

  }

  _moveElevator(node) {
    
  }

  _checkCancelMovement(node) {

  }
}

module.exports = ElevatorController;
