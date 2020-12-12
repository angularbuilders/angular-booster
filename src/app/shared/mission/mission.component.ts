import { Component, Input, OnInit } from '@angular/core';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-mission',
  template: `
    <div *ngIf="launch.mission != null">
      <div *ngIf="launch.mission.description != null">
        <h5>Mission: {{ launch.mission.name }}</h5>
        {{ launch.mission.description }}
      </div>
      <div *ngIf="launch.mission.description == null">
        Mission: <b>{{ launch.mission }}</b>
      </div>
    </div>
  `,
  styles: [],
})
export class MissionComponent implements OnInit {
  @Input() launch: Launch;
  constructor() {}

  ngOnInit(): void {}
}
