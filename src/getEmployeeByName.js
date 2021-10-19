const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  if (typeof employeeName !== 'string') {
    return {};
  }
  const result = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return result;
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Ola'));
