import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

// This is the root module of the Angular app - this is where you declare all of the components that are used in this module
// This is similar to the App.js file in React
// As we know, components can also have child components, so this same Module pattern can be used in any component that has child components
@NgModule({
  declarations: [AppComponent, AppointmentListComponent], // declare the components that are used in this module
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
