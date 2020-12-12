import { Component, Input, OnInit } from '@angular/core';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-launch-card',
  template: `
    <aside class="{{ launch.status.name | lowercase }}">
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
