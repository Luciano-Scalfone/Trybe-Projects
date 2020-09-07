const { users, findUserById, getUserName } = require('../exercise2.js');
const { TestScheduler } = require('jest');

describe('Quando a função getUserName é chamada', () => {
  test('retorna o nome do animal', () => {
    expect.assertions(1);
    return getUserName(4).then(userName => {
      expect(userName).toBe('Mark')
    })
  })
})