const assert = require('assert');

const findTheNeedle = (param1, param2) => {
  let count = 0; 
  if (param1.includes(param2)) {
    for (let index in param1) {
      if (param1[index] !== param2) {
        count += 1;
      } else {
        break;
      }
    }
  } else {
    count -= 1;
  }
  return count;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);