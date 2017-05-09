const Elevator = require('./elevator');

describe('Elevator', () => {
  it('takes in a starting floor', () => {
    const newElevator = new Elevator(5, 1);
    expect(newElevator.floor).toBe(1);
    expect(newElevator.elevatorNumber).toBe(5);
  });
});
