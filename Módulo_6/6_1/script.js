let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO',];
let selectEstado = document.querySelector('#estado');

for (let index = 0; index < estados.length; index += 1) {
  let option = document.createElement('option');
  option.innerHTML = estado[index];
  option.value = estado[index]
  estados.appendChild(option);
}