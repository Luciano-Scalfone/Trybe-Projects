function sum (n) {
  let sum = 0;
  for (index = 1; index <= n; index +=1){
    sum += index;
  }
  return sum;
}

console.log(sum(5))