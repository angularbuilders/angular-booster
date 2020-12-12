import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../api-result';
import { Launch } from '../launch';
import { QueryParams } from '../query-params';

@Component({
  selector: 'ab-search',
  template: `
    <section>
      <form>
        <legend>
          Searching {{ queryParams.numberOfLaunches }} launches related to
          {{ queryParams.searchTerm }}
        </legend>
        <div>
          <label for="searchTerm">Search term</label>
          <input name="searchTerm" type="text" [(ngModel)]="queryParams.searchTerm" />
        </div>
        <div>
          <label for="numberOfLaunches">Number of launches</label>
          <input name="numberOfLaunches" type="number" [(ngModel)]="queryParams.numberOfLaunches" />
        </div>
        <button type="submit" (click)="getSpaceData()">Go !</button>
      </form>
    </section>
    <section *ngIf="launches.length > 0">
      <header>
        <h2>Found {{ launches.length }} launches</h2>
      </header>
      <aside *ngFor="let launch of launches" class="{{ launch.status.name | lowercase }}">
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
    <aside *ngIf="launches.length == 0">
      <header>
        <h4>📡 Waiting... No data yet 📡</h4>
      </header>
    </aside>
    <aside *ngIf="theProblem !== ''">
      <header>
        <h3>💫 Houston, we have a problem! 💫</h3>
        <h5>{{ theProblem | json }}</h5>
      </header>
    </aside>
  `,
  styles: [],
})
export class SearchComponent implements OnInit {
  queryParams: QueryParams = {
    numberOfLaunches: 100,
    searchTerm: 'Shuttle',
  };
  launches: Launch[] = [];
  theProblem = '';

  constructor(private http: HttpClient) {}

  getSpaceData(): void {
    const launchesUrl = `${environment.rootUrl}limit=${this.queryParams.numberOfLaunches}&search=${this.queryParams.searchTerm}`;
    this.http.get<ApiResult>(launchesUrl).subscribe({
      next: data => (this.launches = data.results),
      error: err => (this.theProblem = err.error.detail),
    });
  }

  ngOnInit(): void {
    this.getSpaceData();
  }
}
