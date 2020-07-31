let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO',];
let selectEstado = document.querySelector('#estado');
let emailInput = document.querySelector('#email');

for (let index = 0; index < estados.length; index += 1) {
  let option = document.createElement('option');
  option.innerHTML = estado[index];
  option.value = estado[index]
  estados.appendChild(option);
}

emailInput.addEventListener('change', checkEmail);

function checkEmail (event) {
  let email = event.target;
  let regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/)
  if (email == regex) {
    
  }
}