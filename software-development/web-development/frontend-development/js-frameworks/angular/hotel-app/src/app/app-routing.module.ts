import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

// Sets up route mappings for each "page" in the app
// Ensure you add each module for these components to the imports array in src/app/app.module.ts
const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Component (page) to render when hitting /
  },
  {
    path: 'new',
    component: ReservationFormComponent, // Component (page) to render when hitting /new
  },
  {
    path: 'list',
    component: ReservationListComponent, // Component (page) to render when hitting /list
  },
  {
    path: 'edit/:id',
    component: ReservationFormComponent, // Component (page) to render when hitting /edit
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
