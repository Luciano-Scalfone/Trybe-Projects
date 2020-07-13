let peca = "bispo";

switch (peca) {
  case "cavalo": 
  console.log("Duas casas à frente e uma casa ao lado.");
  break;
  case "torre": 
  console.log("Á frente ou ao lado.");
  break;
  case "bispo": 
  console.log("Diagonais.");
  break;
  case "rei":
  break;
  console.log("1 casa para qualquer lado.");
  case "rainha": 
  break;
  console.log("Para qualquer lado.");
  break;
  case "peao": 
  console.log("1 à frente, e 'come' 1 na diagonal.");
  break;
  default :
  console.log("Peça inválida.")
}
