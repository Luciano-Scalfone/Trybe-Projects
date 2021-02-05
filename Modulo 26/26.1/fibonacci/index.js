const inquirer = require('inquirer');

function isInteger (number) {
  return parseInt(number) === parseFloat(number);
}

function validaN (value) {
  if (value < 0) return 'Informe um número maior ou igual a 0';
  if (Number.isNaN(value) || !isInteger(value)) return 'Informe um número inteiro';
  return true;
}

function calculaElemento (n) {
  let a = 1;
  let b = 1;

  for (; n >= 0; n--) {
    if (b) console.log(b);
    const temp = a;
    a = a + b;
    b = temp;
  }

  console.log(b);
  return b;
}

async function realizaCalculo () {
  const answers = await inquirer.prompt([{
    type: 'input',
    validate: validaN,
    name: 'n',
    message: 'Informe o valor de n:'
  }]);

  const n = parseInt(answers.n, 10);

  console.log('n: %s', n);

  calculaElemento(n - 2);
}

realizaCalculo();