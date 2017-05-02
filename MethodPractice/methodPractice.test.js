describe('splice', () => {

  let fruits = ['apple', 'banana', 'orange'];
  fruits.splice(1,0, 'pear', 'grapefruit');

  it ('adds elements to the middle of the array and deletes nothing', () => {
    expect(fruits).toEqual(['apple', 'pear', 'grapefruit', 'banana', 'orange']);
  });

  let cities = ['San Francisco', 'Salt Lake', 'Chicago', 'Miami', 'Los Angeles'];
  cities.splice(2, 2);

  it ('delete items from the array', () => {
    expect(cities).toEqual(['San Francisco', 'Salt Lake', 'Los Angeles']);
  });
});

describe('indexOf', () => {
  const arr = ['hello', 'what up', 'goodbye', 'what up', 'goodbye'];
  indexOfHello = arr.indexOf('hello');

  it ('finds the index', () => {
    expect(indexOfHello).toBe(0);
  });

  indexOfGoodbye = arr.indexOf('goodbye');

  it ('find the first index', () => {
    expect(indexOfGoodbye).toBe(2);
  });
});

describe('lastIndexOf', () => {

  const arr = ['hello', 'hello'];
  const lastHello = arr.lastIndexOf('hello');

  it ('finds the last index', () => {
    expect(lastHello).toBe(1);
  });
});
