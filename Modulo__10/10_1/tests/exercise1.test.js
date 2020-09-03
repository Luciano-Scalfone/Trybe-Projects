const sum = require('../exercisespart1.js');

test ('Sum two values', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => sum(5, '5')).toThrow();
})
