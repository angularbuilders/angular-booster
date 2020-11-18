import { Component } from '@angular/core';
import { Launch } from './launch';
import { QueryParams } from './query-params';

@Component({
  selector: 'ab-root',
  template: `
    <header>
      <h1>{{ title }}</h1>
      <p>Angular application example for lift off 🚀</p>
    </header>
    <section>
      <form>
        <legend>
          Searching {{ queryParams.numberOfLaunches }} launches related to
          {{ queryParams.searchTerm }}
        </legend>
        <div>
          <label for="searchTerm">Search term</label>
          <input name="searchTerm" type="text" value="{{ queryParams.searchTerm }}" />
        </div>
        <div>
          <label for="numberOfLaunches">Number of launches</label>
          <input name="numberOfLaunches" type="number" value="{{ queryParams.numberOfLaunches }}" />
        </div>
        <button type="submit" class="">Go !</button>
      </form>
    </section>
    <section>
      <header>
        <h2>Found {{ launches.length }} launches</h2>
      </header>
      <aside>
        <h3>
          {{ launches[0].name }}
        </h3>
        <p>
          <b>on {{ launches[0].net | date: 'dd/MM/yyyy HH:mm:ss' }}</b>
        </p>
        <p>
          <i> at {{ launches[0].location }}</i>
        </p>
        <i> pad: {{ launches[0].pad }}</i>
      </aside>
    </section>
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
  queryParams: QueryParams = {
    numberOfLaunches: 100,
    searchTerm: 'Shuttle',
  };
  launches: Launch[] = [
    {
      name: 'Space Shuttle Columbia / OV-102 | STS-1',
      net: new Date('1981-04-12T12:00:04Z'),
      status: { name: 'Success' },
      location: 'Kennedy Space Center, FL, USA',
      pad: 'Launch Complex 39A',
    },
  ];
}
