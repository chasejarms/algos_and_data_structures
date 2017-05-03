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

const set = new Set();

describe('Set', () => {

  it ('creates a new set with nothing in it', () => {
    expect(set.size).toBe(0);
  });


  it ('adds things to the set', () => {
    set.add(3);
    set.add(4);
    set.add(5);
    expect(set.has(3)).toBeTruthy();
    expect(set.has(4)).toBeTruthy();
    expect(set.has(5)).toBeTruthy();
  });

  it('deletes things from the set', () => {
    set.delete(5);
    expect(set.has(5)).toBeFalsy();
  });

  it('can be turned back into an array', () => {
    const array = [...set];
    expect(array).toEqual([3,4]);
  });

  it('can be combined with other sets to create new sets', () => {
    const setTwo = new Set([7,8,9]);
    const combinedSet = new Set([...set, ...setTwo]);
    expect([...combinedSet]).toEqual([3,4,7,8,9]);
  });
});

describe('Math', () => {
  it('gives us the absolute value of a number', () => {
    const squareRootOfSixtyFour = Math.sqrt(64);
    expect(squareRootOfSixtyFour).toBe(8);
  });

  it('makes negative values positive', () => {
    const absoluteValue = Math.abs(50 - 200);
    expect(absoluteValue).toBe(150);
  });

  it('rounds decimals to integers', () => {
    const roundedToInteger = Math.round(5.6789);
    expect(roundedToInteger).toBe(6);
  });
})

describe('toFixed', () => {
  it('rounds to multiple decimals', () => {
    const twoDecimals = +2.1345.toFixed(2);
    expect(twoDecimals).toBe(2.13);
  });
});
