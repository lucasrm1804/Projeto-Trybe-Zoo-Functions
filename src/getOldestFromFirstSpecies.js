const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getAnimals = require('./getSpeciesByIds');

function firstAnimal(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const animais = (funcionario.responsibleFor)[0];
  return animais;
}

function getOldestFromFirstSpecies(id) {
  const animal = firstAnimal(id);
  const getAnimalsId = getAnimals(animal)[0].residents;
  const animalVelho = getAnimalsId.reduce((animalId, acc) => {
    if (animalId.age < acc.age) {
      return acc;
    }
    return animalId;
  });
  return [animalVelho.name, animalVelho.sex, animalVelho.age];
}

module.exports = getOldestFromFirstSpecies;
