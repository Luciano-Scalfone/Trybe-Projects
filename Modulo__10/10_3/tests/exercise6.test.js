let { fetchAnimal } = require('../exercise6');

test('testa requisição', () => {
  fetchAnimal = jest.fn()
    .mockResolvedValueOnce('request resolved')
    .mockRejectedValueOnce('request failed');

  expect(fetchAnimal()).resolves.toMatch('request resolved');
  expect(fetchAnimal()).rejects.toMatch('request failed');
})