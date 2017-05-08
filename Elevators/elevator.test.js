const Elevator = require('./elevator');

describe('Elevator', () => {
  it('takes in a starting floor', () => {
    const newElevator = new Elevator(1);
    expect(newElevator.floor).toBe(1);
  });
});
