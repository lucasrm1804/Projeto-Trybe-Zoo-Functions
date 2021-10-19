const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }

  const result = ids.map((id) => species.find((specie) => specie.id === id));
  return result;
}
module.exports = getSpeciesByIds;
