import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({}); // This is the form group that will be used in the template.

  // This is the constructor for the component. It is where we inject the form builder and the reservation service.
  // Dependency injection is a design pattern that allows us to inject dependencies into a class instead of having
  // the class create the dependencies itself. This allows us to easily swap out the dependencies for other
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.reservationService.createReservation(this.reservationForm.value);
    }
  }

  initializeForm() {
    // This sets up the form builder with the fields we want to use in the form and applies reactive validation to them.
    this.reservationForm = this.formBuilder.group({
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
      checkinDate: ['', Validators.required],
      checkoutDate: ['', Validators.required],
    });
  }

  isInvalidInput(fieldName: string) {
    return (
      this.reservationForm.get(fieldName)?.invalid &&
      this.reservationForm.get(fieldName)?.touched
    );
  }
}
