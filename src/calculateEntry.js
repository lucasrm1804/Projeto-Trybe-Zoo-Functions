const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return { child: 0, adult: 0, senior: 0 };
  }
  const numberOfChild = entrants.filter((entrant) => entrant.age < 18);
  const numberOfAdult = (entrants.filter((entrant) => entrant.age >= 18))
    .filter((entrant) => entrant.age < 50);
  const numberOfSenior = entrants.filter((entrant) => entrant.age >= 50);
  const numberOfVisits = { child: numberOfChild.length,
    adult: numberOfAdult.length,
    senior: numberOfSenior.length,
  };
  return numberOfVisits;
}

function calculateEntry(entrants) {
  if (entrants === undefined) { return 0; }
  const { adult, child, senior } = countEntrants(entrants);
  const totalEntry = (adult * prices.adult) + (child * prices.child) + (senior * prices.senior);
  return totalEntry;
}

module.exports = { calculateEntry, countEntrants };

console.log(calculateEntry({}));
