const number = require('../exercises');

describe('#isDivisible', () => {
  number.randomNumber = jest.fn()
  .mockReturnValue(10)
  .mockImplementationOnce((a, b) => a / b);

  it('return division', () => {
    expect(number.randomNumber(2, 2)).toBe(1);
    expect(number.randomNumber).toHaveBeenCalledWith(2, 2);
    expect(number.randomNumber).toHaveBeenCalledTimes(1);
  })

  it('return number 10', () => {
    expect(number.randomNumber()).toBe(10);
    expect(number.randomNumber).toHaveBeenCalledTimes(2);
  })
})