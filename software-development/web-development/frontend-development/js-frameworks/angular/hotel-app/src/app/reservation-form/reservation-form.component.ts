import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({}); // This is the form group that will be used in the template.

  // Inject the form builder, reservation service, and router into the component using dependency injection.
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private ac: ActivatedRoute
  ) {}

  // useEffect() in React but ALWAYS runs when the component is initialized and never again.
  ngOnInit(): void {
    this.initForm();
    const res = this.extractReservationIfExists();
    if (res) {
      this.reservationForm.patchValue(res);
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation = this.reservationForm.value;
      const existingReservation = this.extractReservationIfExists();
      if (existingReservation) {
        const updatedReservation = {
          id: existingReservation.id,
          ...reservation,
        };
        this.reservationService.updateReservation(
          existingReservation.id,
          updatedReservation
        );
      } else {
        this.reservationService.createReservation(this.reservationForm.value);
      }
    }
    this.router.navigate(['/list']);
  }

  initForm() {
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

  extractReservationIfExists() {
    let reservationIfIfExists = this.ac.snapshot.paramMap.get('id');
    if (reservationIfIfExists) {
      let reservation = this.reservationService.getReservationById(
        reservationIfIfExists
      );
      return reservation;
    }
    return null;
  }
}
