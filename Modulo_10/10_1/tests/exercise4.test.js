const myFizzBuzz = require('../exercisespart1.js');

test('function fizzBuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(3)).toBe('fizz');
  expect(myFizzBuzz(5)).toBe('buzz');
  expect(myFizzBuzz(11)).toBe(11);
  expect(myFizzBuzz('15')).toBeFalsy();
})
