import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceService } from '../core/space.service';
import { Launch } from '../launch';

@Component({
  selector: 'ab-launch',
  template: `<section>
    <ab-launch-card
      [launch]="launch"
      allowAddToFavorites="true"
      (addToFavorites)="onAddToFavorites()"
    >
    </ab-launch-card>
  </section>`,
  styles: [],
})
export class LaunchComponent implements OnInit {
  launchId: string;
  launch: Launch;
  theProblem = '';
  constructor(private route: ActivatedRoute, private srv: SpaceService) {}

  ngOnInit(): void {
    this.launchId = this.route.snapshot.params.id;
    this.srv.getLaunchByslug$(this.launchId).subscribe({
      next: data => (this.launch = data),
      error: err => (this.theProblem = err.error.detail),
    });
  }

  onAddToFavorites() {}
}
