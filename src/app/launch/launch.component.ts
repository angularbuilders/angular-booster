import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../core/favorites.service';
import { SeoService } from '../core/seo.service';
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
    private fav: FavoritesService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.launchId = this.route.snapshot.params.id;
    this.srv.getLaunchBySlug$(this.launchId).subscribe({
      next: data => {
        this.launch = data;
        this.seo.setTitle(data.name);
        this.seo.setDescription(this.getSeoDescription(data));
        this.seo.setKeywords(this.getSeoKeywords(data));
      },
      error: err => (this.theProblem = err.error.detail),
    });
  }

  onAddToFavorites(slug: string) {
    this.fav.add(slug);
  }

  private getSeoDescription(launch: Launch) {
    let description = launch.name;
    if (launch.mission) {
      description += ' ' + launch.mission.description;
    }
    if (launch.launch_service_provider) {
      description += ' ' + launch.launch_service_provider.name;
    }

    return description;
  }
  private getSeoKeywords(launch: Launch) {
    let keywords = launch.slug.split('-');
    if (launch.pad) {
      keywords = [...keywords, ...launch.pad.name.split(' ')];
    }
    return [...new Set(keywords)];
  }
}
