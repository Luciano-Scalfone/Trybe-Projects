const { users, findUserById, getUserName } = require('../exercise2.js');

describe('Quando a função getUserName é chamada com async/await', () => {
  it('retorna o nome do animal', async () => {
    expect.assertions(1);
    const userName = await getUserName(4);
      expect(userName).toBe('Mark');
  })

  it('retorta um erro', async () => {
    expect.assertions(1);
   try {
     await getUserName(8);
    } catch (error) {
      expect(error).toEqual({ error: `User with 8 not found.` });
    }
  })
})