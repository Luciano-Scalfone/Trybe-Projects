const functions = require('../exercises');

describe('Funções com strings', () => {
  const toUpperCaseMock = jest.spyOn(functions, 'toUpperCase').mockImplementation((string) => string.toLowerCase());
  const firstLetterMock = jest.spyOn(functions, 'firstLetter').mockImplementation((string) => {
    const list = string.split('');
    return list[list.length - 1];
  });
  const concatMock = jest.spyOn(functions, 'concat').mockImplementation((stringA, stringB, stringC) => `${stringA} ${stringB} ${stringC}!`)

  describe('teste de modificação', () => {
    // toUpperCaseMock.mockImplementation((string) => string.toLowerCase());
    // firstLetterMock.mockImplementation((string) => {
    //   const list = string.split('');
    //   return list[list.length - 1];
    // });
    // concatMock.mockImplementation((stringA, stringB, stringC) => `${stringA} ${stringB} ${stringC}!`);

    it('String toLowerCase', () => {
      expect(toUpperCaseMock('BATATA')).toMatch('batata');

      functions.toUpperCase.mockRestore();

      expect(functions.toUpperCase('batata')).toMatch('BATATA');
    })

    it('Retorna a última letra', () => {
      expect(firstLetterMock('Trybe')).toBe('e');

      functions.firstLetter.mockRestore();

      expect(functions.firstLetter('Trybe')).toMatch('T');
    })

    it('Retorna uma frase', () => {
      expect(concatMock('Corra', 'Forest', 'corra')).toBe('Corra Forest corra!');

      functions.concat.mockRestore();

      expect(functions.concat('Corra', 'Forest')).toBe('Corra Forest');
    })
  })
})