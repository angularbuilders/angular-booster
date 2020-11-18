import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiResult } from './api-result';
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
      <aside *ngFor="let launch of launches">
        <h3>
          {{ launch.name }}
        </h3>
        <p>
          <b>on {{ launch.net | date: 'dd/MM/yyyy HH:mm:ss' }}</b>
        </p>
        <p>
          <i> at {{ launch.location }}</i>
        </p>
        <i> pad: {{ launch.pad }}</i>
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
  launches: Launch[] = [];

  constructor(http: HttpClient) {
    const rootUrl = 'https://lldev.thespacedevs.com/2.0.0/launch/?mode=list&';
    const launchesUrl = `${rootUrl}limit=${this.queryParams.numberOfLaunches}&search=${this.queryParams.searchTerm}`;
    http.get<ApiResult>(launchesUrl).subscribe({
      next: data => (this.launches = data.results),
    });
  }
}
