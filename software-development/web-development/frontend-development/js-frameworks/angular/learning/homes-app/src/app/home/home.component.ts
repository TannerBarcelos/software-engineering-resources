import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HousingLocationComponent } from '../housing-location/housing-location.component'
import { HousingLocation } from '../housing-location'
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-home', // the name of the component we put in a template i.e <app-home></app-home>
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `<section>
      <form>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Filter by city"
          #filter
        />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  filteredLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService) // inject the service into the component so we can use it

  constructor() {
    this.housingService.getAllHousingLocations().then((locations) => {
      this.housingLocationList = locations
      this.filteredLocationList = locations
    })
  }

  filterResults(city: string): void {
    if (!city) {
      this.filteredLocationList = this.housingLocationList
      return
    }

    if (city) {
      // filtering by location city - housingLocationList is the original list of locations, and filteredLocationList is the list that will be displayed so we can retain the source of truth
      this.filteredLocationList = this.housingLocationList.filter((location) =>
        location?.city?.toLocaleLowerCase().includes(city.toLocaleLowerCase()),
      )
    }
  }
}
