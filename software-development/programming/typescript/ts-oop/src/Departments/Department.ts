import type {Employee} from "../lib/definitions";
import {jsonify} from "../lib/utils/jsonify";

class Department {
  private deptName: string;
  protected employees: Array<Employee> = [];

  constructor(name: string) {
    this.deptName = name;
  }

  get departmentName(): string {
    return `The department name is ${this.deptName}`;
  }

  set updateName(value: string) {
    this.deptName = value;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    return this;
  }

  describeDeptInfo() {
    const departmentCollection = {
      [this.deptName]: {
        employees: this.employees,
      },
    };
    const prettified = jsonify(departmentCollection);
    console.log(prettified);
  }
}

export default Department;
