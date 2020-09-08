function randomNumber() {
  const r = Math.floor(Math.random() * 100);
  return r;
}

const divisible = (divisor) => randomNumber() % divisor === 0;

test('number is divisible', () => {
  randomNumber = jest.fn()
  .mockReturnValue(2)
  .mockReturnValueOnce(4)
  .mockReturnValueOnce(3);

  divisible();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  expect(divisible(2)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(2);

  expect(divisible(2)).toBe(false);
  expect(randomNumber).toHaveBeenCalledTimes(3);

  expect(divisible(2)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(4);
})