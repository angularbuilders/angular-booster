import { Component, Input, OnInit } from '@angular/core';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-waiting-card',
  template: `
    <aside *ngIf="launches.length == 0">
      <header>
        <h4>📡 Waiting... No data yet 📡</h4>
      </header>
    </aside>
  `,
  styles: [],
})
export class WaitingCardComponent implements OnInit {
  @Input() launches: Launch[] = [];
  constructor() {}

  ngOnInit(): void {}
}
