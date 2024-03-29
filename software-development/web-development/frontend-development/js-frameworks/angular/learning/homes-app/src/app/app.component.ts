import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HomeComponent, RouterModule],
  template: `<main>
    <header class="brand-name">
      <img src="/assets/logo.svg" alt="logo" class="brand-logo" />
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes'
}
