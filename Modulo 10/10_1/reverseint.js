// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reverseInt;

  if (n < 0) {
    n *= -1;
    reverseInt = parseInt(n.toString().split('').reverse().join('') * -1);
  } else {
    reverseInt = parseInt(n.toString().split('').reverse().join(''));
  }
  return reverseInt;
}

module.exports = reverseInt;