import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { HousingService, TLocation } from '../housing.service'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        [src]="housingLocation?.photo"
        alt="image of {{ housingLocation?.name }}"
        class="listing-photo"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Comes with Wifi?: {{ housingLocation?.wifi ? 'yes' : 'no' }}</li>
          <li>
            Comes with in-unit laundry?:
            {{ housingLocation?.laundry ? 'yes' : 'no' }}
          </li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply to live here</h2>
        <!-- () - signifies an event bind -->
        <!-- [] - signifies a variable bind -->
        <form [formGroup]="applicationForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" formControlName="firstName" type="text" />

          <label for="last-name">Last Name</label>
          <input id="last-name" formControlName="lastName" type="text" />

          <label for="email">Email</label>
          <!-- Don't use name=, use formControlName= so it can control the inputs and bind the changes to the form group and keep track of the form state -->
          <input id="email" formControlName="email" type="email" />

          <button class="primary" type="submit">Apply Now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute) // allows interaction with angular router, and the current route
  housingService: HousingService = inject(HousingService) // allows interaction with the housing service to get the housing location using its methods which operate on the data in the service (in this case, a static array but in usual cases, it would be an API call or a database call)
  housingLocation: TLocation

  applicationForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })

  constructor() {
    const housingLocationId = this.parseNumber(this.route.snapshot.params['id'])
    this.housingService
      .getHousingLocation(housingLocationId)
      .then((location) => {
        this.housingLocation = location
      })
  }

  private parseNumber(n: any): number {
    return Number(n)
  }

  submitApplication() {
    const { firstName, lastName, email } = this.applicationForm.value
    const payload = {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      email: email ?? '',
    }
    this.housingService.submitApplication(payload)
  }
}
