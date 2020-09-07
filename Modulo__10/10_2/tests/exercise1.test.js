const uppercase = require('../exercise1.js');

test('UpperCase function', (done) => {
  const callback = (str) => {
    expect(str).toBe('TRYBE');
    console.log(str);
    done();
  }

  uppercase('trybe', callback);
})