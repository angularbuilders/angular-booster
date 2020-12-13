import { Component } from '@angular/core';

@Component({
  selector: 'ab-root',
  template: `
    <header>
      <nav>
        <h1>
          <a [routerLink]="['/']">{{ title }}</a>
        </h1>
        <ul>
          <li>
            <a [routerLink]="['/search']">Search</a>
          </li>
          <li>
            <a [routerLink]="['/search']">Favorites</a>
          </li>
        </ul>
      </nav>
      <h1><a [routerLink]="['/']">Angular application example for lift off 🚀</a></h1>
    </header>
    <main>
      <router-outlet> </router-outlet>
    </main>
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
