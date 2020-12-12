import { Component, Input, OnInit } from '@angular/core';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-service-provider',
  template: `
    <div *ngIf="launch.launch_service_provider">
      <h5>Provider: {{ launch.launch_service_provider.name }}</h5>
      {{ launch.launch_service_provider.description }}
    </div>
  `,
  styles: [],
})
export class ServiceProviderComponent implements OnInit {
  @Input() launch: Launch;
  constructor() {}

  ngOnInit(): void {}
}
