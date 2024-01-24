import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router'; // enables routerLink and router-outlet

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent], // other modules can use the components in this module now by exporting them here and importing this module in any other module that needs to use the components in this module
})
export class HomeModule {}
