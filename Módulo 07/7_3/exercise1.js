const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
assert.strictEqual(sum(4, 5), 9, console.log('passed'));
assert.equal(sum(0, 0), 0, console.log('passed'));
assert.throws(() => {sum(5, "5"); }, /^Error: parameters must be numbers/, console.log('passed'));
