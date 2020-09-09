let { randomNumber, toUpperCase, firstLetter, concat } = require('../exercises');

describe('Funções com strings', () => {
  toUpperCase = jest.fn().mockImplementation((string) => string.toLowerCase());
  firstLetter = jest.fn().mockImplementation((string) => {
      const list = string.split('');
      return list[list.length - 1];
    });
  concat = jest.fn().mockImplementation((stringA, stringB, stringC) => `${stringA} ${stringB} ${stringC}!`)

  it('String toLowerCase', () => {
    expect(toUpperCase('BATATA')).toMatch('batata');
  })

  it('Retorna a última letra', () => {
    expect(firstLetter('Trybe')).toMatch('e');
  })

  it('Retorna uma frase', () => {
    expect(concat('Corra', 'Forest', 'corra')).toBe('Corra Forest corra!');
  })
})