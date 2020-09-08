const number = require('../exercises');

// Exercicios 1 e 2.

// describe('#isDivisible', () => {
//   number.randomNumber = jest.fn()
//   .mockReturnValue(10)
//   .mockImplementationOnce((a, b) => a / b);

//   it('return division', () => {
//     expect(number.randomNumber(2, 2)).toBe(1);
//     expect(number.randomNumber).toHaveBeenCalledWith(2, 2);
//     expect(number.randomNumber).toHaveBeenCalledTimes(1);
//   })

//   it('return number 10', () => {
//     expect(number.randomNumber()).toBe(10);
//     expect(number.randomNumber).toHaveBeenCalledTimes(2);
//   })
// })

// Exercicio 3.

describe('#Multiplicação', () => {
  number.randomNumber = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);

  it('return division', () => {
    expect(number.randomNumber(2, 2, 2)).toBe(8);
    expect(number.randomNumber).toHaveBeenCalledWith(2, 2, 2);
    expect(number.randomNumber).toHaveBeenCalledTimes(1);
  })

  it('Dobro', () => {
    number.randomNumber.mockReset()
    .mockImplementation((a) => a * 2);

    expect(number.randomNumber(10)).toBe(20);
    expect(number.randomNumber).toHaveBeenCalledTimes(1);
  })
})