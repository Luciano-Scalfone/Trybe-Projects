const inquirer = require('inquirer');

function isInteger (number) {
  return parseInt(number) === parseFloat(number);
}

function validate (value) {
  if (value < 0) return 'Informe um número maior ou igual a 0';
  if (Number.isNaN(value) || !isInteger(value)) return 'Informe um número inteiro';
  return true;
}

function fatorial(input) {
  let result = input;

  for(let i = input - 1; i > 1; i--) {
    result *= i;
  };

  return result;
};

async function calculaFatorial() {
  const number = await inquirer.prompt([
    {
      name: 'number',
      type: 'input',
      message: 'Insira um número: ',
      validate,
    },
  ]);

  const result = fatorial(number.number);

  console.log(result);
};

calculaFatorial();
