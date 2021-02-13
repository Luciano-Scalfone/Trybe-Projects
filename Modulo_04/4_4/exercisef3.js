let arrayint = [2, 4, 6, 7, 10, 0, -3];

/* retornar o maior valor que existe no array*/

function greater () {
  let number = 10;
  let output = 0;
  for (index in arrayint) {
    if (arrayint[index] < number) {
      number = arrayint[index]; 
      output = index;
    }
  }
  return output;
}

console.log(greater(arrayint));