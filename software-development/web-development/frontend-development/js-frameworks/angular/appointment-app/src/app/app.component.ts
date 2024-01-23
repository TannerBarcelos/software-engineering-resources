import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // component name - this is the name you use in the HTML to render this component <app-root></app-root>
  templateUrl: './app.component.html', // the HTML template to render when this component is used
  styleUrls: ['./app.component.css'], // the CSS styles to apply to this component
})
export class AppComponent {
  // These values are used in the HTML template - this is the JS/TS code that is used to render the HTML for this component
  // just like the code in a react component before returning some JSX

  // These are the properties of the class that can be used in the HTML template - similar to state in React using {{}} to render the value
  title = 'appointment-app';
  message = 'hello world';
}
