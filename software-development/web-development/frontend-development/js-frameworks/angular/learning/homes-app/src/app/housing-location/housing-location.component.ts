import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HousingLocation } from '../housing-location'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        class="listing-photo"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  // @Input() is a decorator that allows the parent component to pass data to the child component. these are props in react
  // in this case we are being passed an entry of housing locations from the parent component which ngFor is iterating over
  @Input() housingLocation!: HousingLocation
}
