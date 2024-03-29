import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter } from '@angular/router'
import { routes } from './app/routes'

bootstrapApplication(AppComponent, {
  // This is where we would provide our routes and enable routing in our application
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err))
