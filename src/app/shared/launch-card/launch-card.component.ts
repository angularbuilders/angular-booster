import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-launch-card',
  template: `
    <aside>
      <h3>
        <a [routerLink]="['/launch/' + launch.slug]"> {{ launch.name }}</a>
      </h3>
      <p class="{{ launch.status.name | lowercase }}">
        <b>on {{ launch.net | date: 'dd/MM/yyyy HH:mm:ss' }}</b>
      </p>
      <ab-location [launch]="launch"></ab-location>
      <ab-mission [launch]="launch"></ab-mission>
      <ab-service-provider [launch]="launch"></ab-service-provider>
      <button (click)="onClicAddToFavorites()">Add to favorites 🤍</button>
    </aside>
  `,
  styles: [
    `
      .success {
        color: #3ad29f;
      }
      .failure {
        color: #f73454;
      }
      .tbd {
        color: #3ad29f;
      }
    `,
  ],
})
export class LaunchCardComponent implements OnInit {
  @Input() launch: Launch;
  @Output() addToFavorites = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onClicAddToFavorites() {
    this.addToFavorites.emit(this.launch.slug);
  }
}
