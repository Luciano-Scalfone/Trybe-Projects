function silable (word, ending) {
  let equal = false;
  if (word[word.length-1] === ending[ending.length-1] && word[word.length-2] === ending[ending.length-2]) {
    console.log(word[word.length-2]);
    equal = true;
  }
  return equal;
}

console.log(silable("trybe", "be"));
console.log(silable("joaofernando", "fernan"));

/* OBS.; Dá pra resolver de forma otimizada da seguinte forma:

function silable (word, ending) {
  return word[word.length-1] === ending[ending.length-1] && word[word.length-2] === ending[ending.length-2];
}
*/