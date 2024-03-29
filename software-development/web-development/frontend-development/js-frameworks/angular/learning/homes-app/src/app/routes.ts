import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { HousingLocationComponent } from './housing-location/housing-location.component'
import { DetailsComponent } from './details/details.component'

export const routes: Routes = [
  {
    path: '', // default route (localhost:4200)
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'details/:id', // id is the housing location id which is passed to the details component, and comes from the array of housing locations in the home component
    component: DetailsComponent,
    title: 'Details',
  },
]
