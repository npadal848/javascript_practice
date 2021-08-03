console.clear();

var employee = {
  empId: 12345,
  name: "Nagesh",
  dept: "Dev",
  project: {
    name: "Simbba Net",
    teamSize: "6",
    domain: "finance",
  },
};

console.log(employee.name);
console.log(employee.project);
console.log(typeof employee.project);
console.log(typeof employee.empId);
console.log(typeof String(employee.empId));
console.log(typeof String(employee.project));
