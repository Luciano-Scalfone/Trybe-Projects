const promise = new Promise((resolve, reject) => {
  const numbers = [];

  for (let index = 0; index < 10; index += 1) {
    const number = Math.round(Math.random() * 50);

    numbers.push(number ** 2);
  }

  const arraySum = numbers.reduce((sum, number) => sum + number);

  arraySum >= 8000 ? reject(arraySum) : resolve(arraySum);  
})
.then(number => [2, 3, 5, 10].map(divisor => number / divisor))
.then(array => console.log(array.reduce((sum, number) => sum + number)))
.catch(_ => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));