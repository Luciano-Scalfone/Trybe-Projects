let arrayint = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

/* retornar o nome com mais caracteres */

function name (arrayint) {
  let greater = arrayint[0];
  for (index in arrayint) {
    if (arrayint[index].length > greater.length) {
      greater = arrayint[index];
    }
  }
  return greater
}

console.log(name(arrayint));