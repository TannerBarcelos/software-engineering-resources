import type {Employee} from "./lib/definitions";

class Department {
  private deptName: string;
  private employees: Array<Employee> = [];

  constructor(name: string) {
    this.deptName = name;
  }

  // Can also define the constructor parameter as so:
  // constructor(private deptName: string) {}
  // This will automatically create a property called deptName and assign the value of the constructor parameter to it - this is a shortcut
  // I LIKE IT BUT ALSO DON'T LIKE IT - I think it's a bit confusing and I prefer to be explicit

  get departmentName(): string {
    return `The department name is ${this.deptName}`;
  }

  set updateName(value: string) {
    this.deptName = value;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(
      `There are ${this.employees.length} employees in the ${this.deptName} department`
    );
    console.log(JSON.stringify(this.employees, null, 2));
  }
}

export default Department;
