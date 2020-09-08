function randomNumber() {
  const r = Math.floor(Math.random() * 100);
  return r;
}

module.exports = { randomNumber };