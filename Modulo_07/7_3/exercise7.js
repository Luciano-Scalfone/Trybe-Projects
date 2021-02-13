const assert = require('assert');

const wordLengths = () => {
  const arr = [];
  for (let index = 0; index < words.length; index += 1) {
    arr.push(words[index].length);
  }
  return arr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);