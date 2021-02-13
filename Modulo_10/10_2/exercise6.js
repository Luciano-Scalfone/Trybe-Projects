const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animals = Animals.filter((animal) => animal.age === age);
      if (animals.length !== 0) {
        return resolve(animals);
      }

      return reject({error: 'Nenhum animal com essa idade!'});
    }, 100);
  })
);

const getAnimal = (age) => {
  return findAnimalsByAge(age).then(animal => animal);
}

module.exports = getAnimal;