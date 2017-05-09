class Elevator {
  constructor(number, floor) {
    this.elevatorNumber = number;
    this.floor = floor;
    this.stops = new Set();
    this.furthestStop = undefined;
    this.callback = undefined;
  }

  changeFloor(newFloor) {
    this.floor = newFloor;
    console.log(`elevator ${this.elevatorNumber} is on floor ${this.floor}`);
    if (this.stops.has(newFloor)) {
      console.log(`elevator ${this.elevatorNumber} is opening the door`);
      window.setTimeout(() => {
        console.log(`elevator ${this.elevatorNumber} is closing the door`);
      }, 1);
      this.stops.delete(newFloor);
    }

    if (this.furthestStop === newFloor) {
      this.furthestStop = undefined;
    }

  }
}

module.exports = Elevator;
