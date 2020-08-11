let gapString = "tryber x aqui!"

function letterSearch (string) {
  let newString = gapString.split('');
  let skills = ['HTML', 'CSS', 'JavaScript', 'Shell'];
  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] === "x") {
      newString[index] = string;
    }
  }
  newString = `${newString.join('')}
  
  Minhas cinco principais habilidades são:
  
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}
    ${skills[3]}
    ${skills[4]}
  
  #goTrybe`
  
  console.log(newString);
}

letterSearch("Luciano");