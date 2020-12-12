import { Component, Input, OnInit } from '@angular/core';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-location',
  template: `
    <p *ngIf="launch.location">
      <i> at {{ launch.location }}</i>
      <i> pad: {{ launch.pad }}</i>
    </p>
    <p *ngIf="!launch.location">
      <i> at {{ launch.pad.location.name }}</i>
      <i> pad: {{ launch.pad.name }}</i>
    </p>
  `,
  styles: [],
})
export class LocationComponent implements OnInit {
  @Input()
  launch: Launch;

  constructor() {}

  ngOnInit(): void {}
}
