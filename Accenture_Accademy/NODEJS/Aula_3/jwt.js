const jwt = require('jsonwebtoken');

let [,, comando, chave, parametro] = process.argv;

if (comando === 'sign') {
  parametro = JSON.parse(parametro);
}

const resultado = jwt[comando](parametro, chave);

console.log(resultado);