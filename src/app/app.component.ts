import { Component } from '@angular/core';

@Component({
  selector: 'ab-root',
  template: `
    <header>
      <h1>{{ title }}</h1>
      <p>Angular application example for lift off 🚀</p>
    </header>
  `,
  styles: [
    `
      h1 {
        color: #28aaff;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-booster';
}
