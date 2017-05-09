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
      const elevator = new Elevator(i, 1);
      const elevatorNode = new Node(elevator);
      firstLinkedList.append(elevatorNode);
    }
  }

  _startTrip(node) {
    // set an interval of moving between floors

    // once there is no more floors to go to, we need to cancel the interval
    // and place the elevator back in the unoccupiedElevator

    // would probably have the set Interval at 5000ms if I wasn't running the tests

    const movement = window.setInterval(() => {
      this._moveElevator(node);
      this._checkCancelMovement(node);
    }, 1)

    intervalCancels[node] = movement;

  }

  _moveElevator(node) {
    const elevatorInfo = node.elevator;
    const currentFloor = elevatorInfo.floor;
    const targetFloor = elevatorInfo.furthestStop;

    // we're moving up

    if (targetFloor > currentFloor) {
      elevatorInfo.changeFloor(currentFloor + 1);
    }
    // we're moving down
    else {
      elevatorInfo.changeFloor(currentFloor - 1);
    }
  }

  _checkCancelMovement(node) {
    const elevatorInfo = node.elevator;
    if (elevatorInfo.stops.size === 0 && this.intervalCancels[node]) {
      window.clearInterval(this.intervalCancels[node]);
    }
  }
}

module.exports = ElevatorController;
