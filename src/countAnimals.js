const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const lista = {};
    species.forEach((specie) => {
      const nome = specie.name;
      const quantidade = specie.residents.length;
      lista[nome] = quantidade;
    });
    return lista;
  } if (animal.sex === undefined) {
    const quantAnimais = species.find((specie1) => specie1.name === animal.specie);
    return quantAnimais.residents.length;
  }
  const quantAnimais = species.find((specie1) => specie1.name === animal.specie);
  const quantAnimaisFiltrados = quantAnimais.residents
    .filter((filterAnimal) => filterAnimal.sex === animal.sex);
  return quantAnimaisFiltrados.length;
}
module.exports = countAnimals;

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
