const assert = require('assert');

const removeVowels = (word) => {
  let results = word.split('');
  let count = 0;

  for (let i = 0; i < results.length; i += 1) {
    if (
      results[i] === 'a' ||
      results[i] === 'o' ||
      results[i] === 'i' ||
      results[i] === 'e' ||
      results[i] === 'u'
    ) {
      count += 1;
      results[i] = count;
    }
  }
  results = results.join('');
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);