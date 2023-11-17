import Department from "./Department";

const accounting = new Department("Accounting");
accounting.updateName = "Accounting and Auditing";

console.log(accounting.departmentName);

accounting.addEmployee({
  name: "Tanner",
  age: 27,
  salary: 100000000,
});

accounting.addEmployee({
  name: "Bob",
  age: 30,
  salary: 250000,
});

accounting.addEmployee({
  name: "John",
  age: 45,
  salary: 100000,
});

accounting.printEmployeeInformation();
