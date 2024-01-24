import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

// This must be injected into the component that needs it.
@Injectable({
  providedIn: 'root',
})

/**
 * A service is a class that is responsible for providing some functionality to the rest of the application in terms
 * of data or logic. In this case, we are using a service to provide the functionality of creating, reading, updating,
 * and deleting reservations. This service is injected into the reservation-form component and the reservation-list
 * component.
 *
 * The service is responsible for maintaining the state of the reservations. This means that the service is the only
 * place where the reservations are stored. This is why we have a private property called reservations that is an
 * array of Reservation objects. This array is private so that it cannot be accessed outside of the service. This
 * means that the only way to access the reservations is through the methods that are defined in the service.
 *
 * We would be doing API calls here if we were using a real backend. Since we are not using a real backend, we are
 * just storing the reservations in local storage for now.
 */
export class ReservationService {
  private reservations: Reservation[] =
    JSON.parse(localStorage.getItem('reservations')!) || [];

  createReservation(reservation: Reservation) {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(reservationId: string): Reservation {
    return this.reservations.find(
      (reservation) => reservation.id === reservationId
    )!;
  }

  updateReservation(reservationId: string, updatedRes: Reservation) {
    const reservationIndex = this.reservations.findIndex(
      (reservation) => reservation.id === reservationId
    );
    this.reservations[reservationIndex] = updatedRes;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(reservationId: string) {
    this.reservations = this.reservations.filter(
      (reservation) => reservation.id !== reservationId
    );
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
