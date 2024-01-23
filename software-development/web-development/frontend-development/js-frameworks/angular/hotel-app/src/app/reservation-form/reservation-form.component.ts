import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({}); // This is the form group that will be used in the template.

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('valid');
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
