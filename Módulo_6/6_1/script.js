let estados = {
  selecione: 'selecione',
  AC: 'Acre',
  AL: 'Alagoas',
  AM: 'Amazonas',
  AP: 'Amapá',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MG: 'Minas Gerais',
  MS: 'Mato Grosso do Sul',
  MT: 'Mato Grosso',
  PA: 'Pará',
  PB: 'Paraíba',
  PE: 'Pernambuco',
  PI: 'Piauí',
  PR: 'Paraná',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RO: 'Rondônia',
  RR: 'Roraima',
  RS: 'Rio Grande do Sul',
  SC: 'Santa Catarina',
  SE: 'Sergipe',
  SP: 'São Paulo',
  TO: 'Tocantins',
};

let selectEstado = document.querySelector('#estado');
for (const property in estados) {
  let option = document.createElement('option');
  option.value = `${property}`;
  option.id = `${property}`;
  option.innerHTML = `${estados[property]}`;
  selectEstado.appendChild(option);
}

function checkMail(event) {
  const emailText = event.target.value;
  const regEx = RegExp(/^[a-zA-Z0-9.!#$%&_-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'i');
  if (!regEx.test(emailText)) {
    alert("E-mail inválido");
  };
}

let emailInput = document.querySelector('#email');
emailInput.addEventListener('change', checkMail);

let today = new Date();
let actual = document.querySelector('#data-inicio');
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if (month < 10) {
  month = '0' + month;
}
if (day < 10) {
  day = '0' + day;
}

today = year + '-' + month + '-'  + day;
actual.setAttribute('max', today);

let container = document.createElement('div')

document.querySelector('#submit-button').addEventListener('click', function(event){
  event.preventDefault()
  const body = document.querySelector('#body');
  curriculum(array);
  body.appendChild(container);
});

const name = document.querySelector('#full-name').value;
const email = document.querySelector('#email').value;
const cpf = document.querySelector('#cpf').value;
const endereco = document.querySelector('#endereco').value;
const cidade = document.querySelector('#cidade').value;
const estado = document.querySelector('#estado').value;
const casa = document.querySelector('#resumo-curriculo').value;
const array = [name, email, cpf, endereco, cidade, estado, casa];

function curriculum () {
  for (let index = 0; index < array.length; index += 1) {
    container.innerHTML = array[index];
  }
};
