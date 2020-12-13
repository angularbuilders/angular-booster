import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../core/favorites.service';
import { SpaceService } from '../core/space.service';
import { Launch } from '../launch';

@Component({
  selector: 'ab-launch',
  template: `<section>
    <ab-launch-card
      [launch]="launch"
      allowAddToFavorites="true"
      (addToFavorites)="onAddToFavorites($event)"
    >
    </ab-launch-card>
  </section>`,
  styles: [],
})
export class LaunchComponent implements OnInit {
  launchId: string;
  launch: Launch;
  theProblem = '';
  constructor(
    private route: ActivatedRoute,
    private srv: SpaceService,
    private fav: FavoritesService
  ) {}

  ngOnInit(): void {
    this.launchId = this.route.snapshot.params.id;
    this.srv.getLaunchBySlug$(this.launchId).subscribe({
      next: data => (this.launch = data),
      error: err => (this.theProblem = err.error.detail),
    });
  }

  onAddToFavorites(slug: string) {
    this.fav.add(slug);
  }
}
