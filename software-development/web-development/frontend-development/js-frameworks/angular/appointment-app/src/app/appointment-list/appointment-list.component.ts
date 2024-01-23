import { Component } from '@angular/core';
import { Appointment } from '../models/appointment'; // ng g interface models/appointment

@Component({
  selector: 'app-appointment-list', // This is the tag name of this component - similar to <AppointmentList /> in React
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  newAptTitle: string = '';
  newAptDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment(): void {
    const newAppt = {
      id: Date.now() + this.appointments.length,
      title: this.newAptTitle,
      date: this.newAptDate,
    };
    this.appointments.push(newAppt);
    this.newAptTitle = '';
    this.newAptDate = new Date();
  }
}
