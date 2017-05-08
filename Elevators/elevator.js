class Elevator {
  constructor(floor) {
    this.floor = floor;
    this.stops = new Set();
    this.furthestStop = undefined;
    this.open = false;
  }
}

module.exports = Elevator;
