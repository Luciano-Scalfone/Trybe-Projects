const obj1 = require('../exercisespart1.js');
const obj2 = require('../exercisespart1.js');
const obj3 = require('../exercisespart1.js');
const { TestScheduler } = require('jest');

test('Objetos', () => {
  expect(obj1).toEqual(obj2);
  expect(obj3).toEqual(obj2);
  expect(obj1).toEqual(obj3);
})
