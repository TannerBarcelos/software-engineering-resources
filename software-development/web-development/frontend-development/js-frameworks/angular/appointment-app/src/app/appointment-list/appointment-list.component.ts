import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-list', // This is the tag name of this component - similar to <AppointmentList /> in React
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  title = 'appointment-list';
}
