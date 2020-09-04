const myRemove = require('../exercisespart1.js');

test ('Função myRemove works', () => {
  const arr = [1, 2, 4];
  const arr1 = [1, 2, 3, 4];

  expect(myRemove([1, 2, 3, 4], 3)).toEqual(arr);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(arr1);
  expect(myRemove([1, 2, 3, 4])).toEqual(arr1);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual(arr1);
})
