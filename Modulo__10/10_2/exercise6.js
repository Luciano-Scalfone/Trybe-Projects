const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalName = Animals.find((animal) => animal.name === name);
      if (animalName) {
        return resolve(animalName);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalsByName(name).then(animal => animal);
}

module.exports = getAnimal;