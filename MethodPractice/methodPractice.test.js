const spliceAdd = require('./methodPractice.js');

describe('splice', () => {
  it ('adds elements to the middle of the array and deletes nothing', () => {
    expect(spliceAdd).toEqual(['apple', 'pear', 'grapefruit', 'banana', 'orange']);
  });
});
