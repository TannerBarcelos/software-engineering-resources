import AccountingDepartment from "./Departments/Accounting";
import SalesDepartment from "./Departments/Sales";

const accounting = new AccountingDepartment();
const sales = new SalesDepartment();

const person1 = accounting.addEmployee({
  name: "Tanner",
  age: 27,
  salary: 100000000,
  emp_id: 1,
});

// Chaining - addEmployee returns the instance of the class so we can chain methods
accounting
  .addEmployee({
    name: "Bob",
    age: 30,
    salary: 250000,
    emp_id: 2,
  })
  .addReport("Something went right", 2)
  .addReport("Something went wrong", 2);

const person3 = sales.addEmployee({
  name: "Joe",
  age: 24,
  salary: 90000000,
  emp_id: 3,
});

const person4 = sales.addEmployee({
  name: "Sally",
  age: 28,
  salary: 500000,
  emp_id: 4,
});

person1.addReport("what a day", 1);

accounting.describeDeptInfo();

accounting.printReports();
