import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // select the <app-root> tag in index.html to render this component similar to <div id="root"></div> and .render() in React
  templateUrl: './app.component.html', // the HTML template to render when this component is used
  styleUrls: ['./app.component.css'], // the CSS styles to apply to this component
})
export class AppComponent {
  title = 'appointment-app';
}
