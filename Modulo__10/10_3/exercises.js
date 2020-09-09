function randomNumber() {
  const number = Math.floor(Math.random() * 100);
  return number;
}

const toUpperCase = (string) => {
  return string.toUpperCase();
}

const firstLetter = (string) => {
  const list = string.split('')
  return list[0];
}

const concat = (a, b) => {
  return a + b;
}

module.exports = { randomNumber, toUpperCase, firstLetter, concat };