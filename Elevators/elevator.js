class Elevator {
  constructor(floor) {
    this.floor = floor;
    this.stops = new Set();
    this.furthestStop = undefined;
    this.open = false;
    this.callback = undefined;
  }

  changeFloor(newFloor) {
    this.floor = newFloor;
    if (this.stops.has(newFloor)) {
      this.
    }
  }
}

module.exports = Elevator;
