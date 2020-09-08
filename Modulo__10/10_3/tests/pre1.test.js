function randomNumber() {
  const r = Math.floor(Math.random() * 100);
  return r;
}

const divisible = (divisor) => {
  return randomNumber() % divisor === 0;
}

test('number is divisible', () => {
  randomNumber = jest.fn()
  .mockReturnValue(2)
  .mockReturnValueOnce(4)
  .mockReturnValueOnce(5);

  divisible();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  console.log(randomNumber())
  expect(divisible(2)).toBe(true);
  // expect(randomNumber).toHaveBeenCalledTimes(2);

  console.log(randomNumber())
  expect(divisible(3)).toBe(false);
  // expect(randomNumber).toHaveBeenCalledTimes(3);

  console.log(randomNumber())
  expect(divisible(2)).toBe(true);
  // expect(randomNumber).toHaveBeenCalledTimes(4);
})