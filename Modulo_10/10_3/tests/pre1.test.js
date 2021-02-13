function randomNumber() {
  const r = Math.floor(Math.random() * 100);
  return r;
}

const divisible = (divisor) => {
  const number = randomNumber();
  console.log(number);
  return number % divisor === 0;
}

test('number is divisible', () => {
  randomNumber = jest.fn()
  .mockReturnValue(2)
  .mockReturnValueOnce(4)
  .mockReturnValueOnce(5);

  expect(divisible(2)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(1);

  expect(divisible(3)).toBe(false);
  expect(randomNumber).toHaveBeenCalledTimes(2);

  expect(divisible(2)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(3);
})