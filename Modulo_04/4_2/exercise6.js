let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = "";

for (i = 0; i < numbers.length; i+=1) {
  if (numbers[i] % 2 == 1) {
    impares +=  numbers[i] +", ";
  }
}

if (impares == "") {
  impares = "nenhum valor ímpar encontrado";
}

console.log(impares);