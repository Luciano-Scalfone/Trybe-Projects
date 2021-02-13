const math = require('../fixacao');

describe('#subtrair', () => {
  let subtracao = jest.spyOn(math, 'subtrair');
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.somar = jest.fn().mockImplementation((a, b) => a + b);
  math.dividir = jest.fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);

  it('função subtrair', () => {
    subtracao.mockReturnValue(20);

    expect(subtracao()).toBe(20); 
    expect(subtracao).toHaveBeenCalledTimes(1);
  })

  it('função multiplicar', () => {
    expect(math.multiplicar()).toBe(10);
  })

  it('função somar', () => {
    expect(math.somar(5, 5)).toBe(10);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(5, 5);
  })

  it('função dividir', () => {
    expect(math.dividir()).toBe(2);
    expect(math.dividir()).toBe(5);
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
  })

  it('função subtrair restaurada', () => {
    subtracao.mockRestore();

    expect(subtracao(5, 5)).toBe(0);
    expect(subtracao).toHaveBeenCalledTimes(1);
    expect(subtracao).toHaveBeenCalledWith(5, 5);
  })
})