function repeticao (n) {
  let count = 0;
  let repeat = 0;
  let number = 0;
  for (index in n) {
    for (jindex in n) {
      if (n[index] === n[jindex]){
        count += 1;
      }
    }
    if (count > repeat) {
      repeat = count;
      number = n[index];
  }
  count = 0;
  }
  return number
}


console.log(repeticao([2, 3, 2, 5, 8, 2, 3]))