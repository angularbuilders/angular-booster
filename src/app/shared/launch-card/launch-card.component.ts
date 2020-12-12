import { Component, Input, OnInit } from '@angular/core';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-launch-card',
  template: `
    <aside>
      <h3>
        <a [routerLink]="['/launch/' + launch.id]"> {{ launch.name }}</a>
      </h3>
      <p class="{{ launch.status.name | lowercase }}">
        <b>on {{ launch.net | date: 'dd/MM/yyyy HH:mm:ss' }}</b>
      </p>
      <p *ngIf="launch.location">
        <i> at {{ launch.location }}</i>
        <i> pad: {{ launch.pad }}</i>
      </p>
      <p *ngIf="!launch.location">
        <i> at {{ launch.pad.location.name }}</i>
        <i> pad: {{ launch.pad.name }}</i>
      </p>
      <div *ngIf="launch.mission != null">
        <div *ngIf="launch.mission.description != null">
          <h5>Mission: {{ launch.mission.name }}</h5>
          {{ launch.mission.description }}
        </div>
        <div *ngIf="launch.mission.description == null">
          Mission: <b>{{ launch.mission }}</b>
        </div>
      </div>
      <div *ngIf="launch.launch_service_provider">
        <h5>Provider: {{ launch.launch_service_provider.name }}</h5>
        {{ launch.launch_service_provider.description }}
      </div>
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
  constructor() {}

  ngOnInit(): void {}
}
