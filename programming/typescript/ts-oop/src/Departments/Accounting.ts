import Department from "./Department";

type Report = {
  text: string;
  date: Date;
  emp_id: number;
};

class AccountingDepartment extends Department {
  private reports: Report[] = [];
  constructor() {
    super("accounting");
  }

  addReport(text: string, emp_id: number) {
    const report: Report = {
      text,
      date: new Date(),
      emp_id, // who filed the report
    };

    this.reports.push(report);
    return this;
  }

  printReports() {
    console.log(this.reports);
  }
}

export default AccountingDepartment;
