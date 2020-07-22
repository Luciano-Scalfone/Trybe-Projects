let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
  resultado = a;
} else if (b > c && b > a) {
  resultado = b;
} else {
  resultado = c;
}

console.log(resultado);