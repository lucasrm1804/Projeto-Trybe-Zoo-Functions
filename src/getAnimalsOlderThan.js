const data = require('../data/zoo_data');

// eslint-disable-next-line no-unused-vars
const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const animalAtual = species.find((specie) => specie.name === animal);
  console.log(animalAtual);
  const result = animalAtual.residents.every((resident) => resident.age >= age);
  return result;
};

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('penguins', 10));
