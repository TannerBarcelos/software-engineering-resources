import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service'; // importing does not initialize the module, we need to add it as a dependency in the constructor.
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})

// Implement OnInit so that the component can be initialized.
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  // Inject reservation service into the component.
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  onDeleteReservation(reservationId: Reservation['id']) {
    this.reservationService.deleteReservation(reservationId);
  }
}
