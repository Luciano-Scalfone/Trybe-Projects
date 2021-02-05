const readlineSync = require('readline-sync');

function indiceObesidade(IMC) {
  if(IMC < 18.5) return console.log('Abaixo do peso (magreza)');
  if(IMC >= 18.5 && IMC <= 24.9) return console.log('Peso normal');
  if(IMC >= 25 && IMC <= 29.9) return console.log('Acima do peso (sobrepeso)');
  if(IMC >= 30 && IMC <= 34.9) return console.log('Obesidade grau I');
  if(IMC >= 35 && IMC <= 39.9) return console.log('Obesidade grau II');
  if(IMC >= 40) return console.log('Obesidade graus III e IV');
};

function calculoDeIMC() {
  const peso = readlineSync.questionFloat('Insira seu peso: ');
  const altura = readlineSync.questionFloat('Insira sua altura: ');
  const IMC =  (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('IMC: %s', IMC);

  indiceObesidade(IMC);
};

calculoDeIMC();

console.log('\n-------------  com inquirer ----------------------\n');

const inquirer = require('inquirer');

function calcularIMC(peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2);
};

function validate(input) {
  return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
};

async function calcIMC() {
  const response = await inquirer
    .prompt([
    {
      name: 'peso',
      type: 'input',
      message: 'Insira seu peso: ',
      validate,
    },
    {
      name: 'altura',
      type: 'input',
      message: 'Insira sua altura: ',
      validate,
    },
  ]);

  const IMC = calcularIMC(response.peso, response.altura);

  console.log('IMC: %s', IMC);

  indiceObesidade(IMC);
};

calcIMC();
