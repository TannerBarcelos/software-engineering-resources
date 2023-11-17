import Department from "./Department";

const accounting = new Department("Accounting");
console.log(accounting.departmentName);

accounting.updateName = "Accounting and Auditing";

console.log(accounting.departmentName);
