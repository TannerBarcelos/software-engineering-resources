import { Component } from '@angular/core';
import { Appointment } from '../models/appointment'; // ng g interface models/appointment
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list', // This is the tag name of this component - similar to <AppointmentList /> in React. We use it in app.component.html as <app-appointment-list></app-appointment-list>
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  // onInit is a lifecycle hook that runs when the component is created - similar to useEffect in React. To use it, we need to import it from @angular/core on line 3 as well as implement it in the class declaration on line 5.
  ngOnInit(): void {
    this.appointments = JSON.parse(
      localStorage.getItem('appointments') || '[]'
    );
  }
  newAptTitle: string = '';
  newAptDesc: string = '';
  newAptDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment(): void {
    const newAppt = {
      id: Date.now() + this.appointments.length,
      title: this.newAptTitle,
      description: this.newAptDesc,
      date: this.newAptDate,
    };
    this.appointments.push(newAppt);
    this.newAptTitle = '';
    this.newAptDesc = '';
    this.newAptDate = new Date();
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  deleteAppointment(id: number): void {
    this.appointments = this.appointments.filter((a) => a.id !== id);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
