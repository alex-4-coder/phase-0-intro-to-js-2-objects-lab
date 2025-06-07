// Write your solution in this file!

const employee = {
  name: "Alice Johnson",
  streetAddress: "123 Maple St"
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  return {
    ...employeeObj,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key) {
  const newEmployee = { ...employeeObj };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
  delete employeeObj[key];
  return employeeObj;
}
