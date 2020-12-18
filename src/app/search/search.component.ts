import { Component, OnInit } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { SpaceService } from '../core/space.service';
import { Launch } from '../launch';
import { QueryParams } from '../query-params';

@Component({
  selector: 'ab-search',
  template: `
    <section>
      <form>
        <legend>
          Searching {{ queryParams.limit }} launches related to
          {{ queryParams.searchTerm }}
        </legend>
        <div>
          <label for="searchTerm">Search term</label>
          <input name="searchTerm" type="text" [(ngModel)]="queryParams.searchTerm" />
        </div>
        <div>
          <label for="numberOfLaunches">Number of launches</label>
          <input name="numberOfLaunches" type="number" [(ngModel)]="queryParams.limit" />
        </div>
        <button type="submit" (click)="getSpaceData()">Go !</button>
      </form>
    </section>
    <section *ngIf="launches.length > 0">
      <header>
        <h2>Found {{ launches.length }} launches</h2>
      </header>
      <ab-launch-card *ngFor="let launch of launches" [launch]="launch"> </ab-launch-card>
    </section>
    <ab-waiting-card [launches]="launches"> </ab-waiting-card>
    <ab-problem-card [theProblem]="theProblem"> </ab-problem-card>
  `,
  styles: [],
})
export class SearchComponent implements OnInit {
  queryParams: QueryParams = {
    limit: 100,
    searchTerm: 'Shuttle',
  };
  launches: Launch[] = [];
  theProblem = '';

  constructor(private srv: SpaceService, private seo: SeoService) {}

  getSpaceData(): void {
    this.srv.getSearchedLaunches$(this.queryParams).subscribe({
      next: data => (this.launches = data),
      error: err => (this.theProblem = err.error.detail),
    });
  }

  ngOnInit(): void {
    this.getSpaceData();
    this.seo.setTitle('Search');
    this.seo.setDescription('Search the rocket launches library.');
    this.seo.setKeywords(['rocket', 'launch', 'search']);
  }
}
