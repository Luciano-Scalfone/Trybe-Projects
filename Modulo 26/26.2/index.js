function mathOperations(x, y, z) {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
      return reject(new Error('Digite apenas números'));
    }
    resolve(x + y);
  })
    .then((r) => {
      if (r * z < 50) {
        return Promise.reject(new Error('Valor muito baixo'));
      }
      return r * z;
    })
}

// ----------- com async/await -------------

const math = async (x, y, z) => {
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
    return Promise.reject(new Error('Digite apenas números'));
  }
  const sum = x + y;
  const mul = sum * z;
  return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
};

console.log(math(10, 10, 10))