let custo = 100;
let venda = 200;

if (custo || venda <= 0) {
  lucro = (venda - (custo * 0.8)) * 1000;
} else {
  lucro = "Error";
}

console.log(lucro);