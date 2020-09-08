const number = require('../exercises');

describe('#isDivisible', () => {
  number.randomNumber = jest.fn().mockReturnValue(10);

  it('return number 10', () => {
    expect(number.randomNumber()).toBe(10);
    expect(number.randomNumber).toHaveBeenCalledTimes(1);
  })
})