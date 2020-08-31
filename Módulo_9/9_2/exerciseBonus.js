const promise = new Promise((resolve, reject) => {
  const numbers = Array.from({ length: 10 }, () =>  
  Math.floor(Math.random() * 50) + 1
  );

  const arraySum = numbers.map(number => number ** 2).reduce((sum, number) => sum + number);

  arraySum >= 8000 ? reject(arraySum) : resolve(arraySum);  
})
.then(number => [2, 3, 5, 10].map(divisor => number / divisor))
.then(array => console.log(array.reduce((sum, number) => sum + number)))
.catch(_ => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));