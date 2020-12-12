import { Component } from '@angular/core';

@Component({
  selector: 'ab-root',
  template: `
    <header>
      <h1>
        <a [routerLink]="['/']">{{ title }}</a>
      </h1>
      <p>Angular application example for lift off 🚀</p>
      <nav>
        <a [routerLink]="['/search']">Search</a>
      </nav>
    </header>
    <router-outlet> </router-outlet>
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
