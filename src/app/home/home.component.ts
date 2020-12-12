import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../api-result';
import { Launch } from '../launch';

@Component({
  selector: 'ab-home',
  template: `
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
export class HomeComponent implements OnInit {
  launches: Launch[] = [];
  theProblem = '';

  constructor(private http: HttpClient) {}

  getSpaceData(): void {
    const launchesUrl = `${environment.rootUrl}launch/upcoming/?mode=list`;
    this.http.get<ApiResult>(launchesUrl).subscribe({
      next: data => (this.launches = data.results),
      error: err => (this.theProblem = err.error.detail),
    });
  }

  ngOnInit(): void {
    this.getSpaceData();
  }
}
