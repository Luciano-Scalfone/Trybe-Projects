function randomNumber() {
  const r = Math.floor(Math.random() * 100);
  return r;
}

const divisible = (divisor) => randomNumber() % divisor === 0;

test('number is divisible', () => {
  divisible()
  expect(randomNumber).toHaveBeenCalled()
})