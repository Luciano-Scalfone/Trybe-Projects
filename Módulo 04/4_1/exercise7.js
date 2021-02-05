let nota = "a";

switch (nota.toLowerCase()) {
  case "a": 
  move = "90%"
  break;
  case "b": 
  move = "80%";
  break;
  case "c": 
  move = "70%";
  break;
  case "d":
  break;
  move = "60%";
  case "e": 
  break;
  move = "50%";
  break;
  case "f": 
  move = "40%";
  break;
  default :
  move = "Insira um valor válido."
}

console.log(move);