const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const employeesIdArray = employees.map((employee) => employee.id);

const getEmployee = (info) => {
  const infoType = Object.keys(info);
  if (infoType[0] === 'name') {
    const funcionario = employees
      .find((employee) => employee.firstName === info.name || employee.lastName === info.name);
    return funcionario;
  }
  if (infoType[0] === 'id') {
    const funcionario = employees.find((employee) => employee.id === info.id);
    return funcionario;
  }
};

const getId = (info) => {
  const employeeInfo = getEmployee(info);
  return employeeInfo.id;
};

const getFullName = (info) => {
  const employeeInfo = `${getEmployee(info).firstName} ${getEmployee(info).lastName}`;
  return employeeInfo;
};

const getSpecies = (info) => {
  const employeeInfo = getEmployee(info);
  const animalId = employeeInfo.responsibleFor;
  const animalName = animalId
    .map((animal) => getSpeciesByIds(animal)[0].name);
  return animalName;
};

const getLocation = (info) => {
  const employeeInfo = getEmployee(info);
  const animalId = employeeInfo.responsibleFor;
  const animalLocation = animalId
    .map((animal) => getSpeciesByIds(animal)[0].location);
  return animalLocation;
};

function getWhitNameOrID(info) {
  const result = {
    id: getId(info),
    fullName: getFullName(info),
    species: getSpecies(info),
    locations: getLocation(info),
  };
  return result;
}

function getAllCovarege() {
  const allCovarege = employeesIdArray.map((employee) => getWhitNameOrID({ id: employee }));
  return allCovarege;
}

function getEmployeesCoverage(info) {
  if (info === undefined) {
    return getAllCovarege();
  }
  if (employees.find((employee) =>
    employee.firstName === info.name
    || employee.lastName === info.name
    || employee.id === info.id)) {
    return getWhitNameOrID(info);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;

// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec252e819a5ad' }));
// console.log(getAllCovarege());
