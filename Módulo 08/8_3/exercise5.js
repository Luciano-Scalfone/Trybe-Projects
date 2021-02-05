    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((acc, curr)=> { 
    return acc + curr.toUpperCase().split('').reduce((acumulator, current) => 
    current === 'A' ? acumulator + 1 : acumulator, 0)
  },0);
}

assert.deepEqual(containsA(), 20);