const { users, findUserById, getUserName } = require('../exercise2.js');

describe('Quando a função getUserName é chamada', () => {
  it('retorna o nome do animal', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe('Mark');
  })

  it('retorta um erro', () => {
    expect.assertions(1);
    return expect(getUserName(8)).rejects.toEqual({ error: `User with 8 not found.` });
  })
})