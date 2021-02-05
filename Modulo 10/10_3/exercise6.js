const fetch = require('node-fetch');

function fetchAnimal() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());
}

module.exports = { fetchAnimal };