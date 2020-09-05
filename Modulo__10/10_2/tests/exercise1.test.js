const uppercase = require('../exercise1.js');

test('UpperCase function', (done) => {
  uppercase('trybe', (str) => {
    expect(str).toBe('TRYBE');
    done();
  })
})