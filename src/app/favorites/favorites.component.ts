import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../core/favorites.service';
import { SeoService } from '../core/seo.service';
import { SpaceService } from '../core/space.service';
import { Launch } from '../launch';

@Component({
  selector: 'ab-favorites',
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
export class FavoritesComponent implements OnInit {
  launches: Launch[] = [];
  theProblem = '';

  constructor(private fav: FavoritesService, private srv: SpaceService, private seo: SeoService) {}

  ngOnInit(): void {
    const favSlugs = this.fav.getList();
    favSlugs.forEach(slug => this.getLauch(slug));
    this.seo.setTitle('Favorites');
  }

  private getLauch(slug: string) {
    this.srv.getLaunchBySlug$(slug).subscribe({
      next: launch => this.launches.push(launch),
      error: err => (this.theProblem = err.error.detail),
    });
  }
}
