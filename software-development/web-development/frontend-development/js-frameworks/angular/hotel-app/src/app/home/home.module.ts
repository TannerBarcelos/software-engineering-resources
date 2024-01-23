import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router'; // enables routerLink and router-outlet

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
