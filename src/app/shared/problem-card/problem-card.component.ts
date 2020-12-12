import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ab-problem-card',
  template: `
    <aside *ngIf="theProblem !== ''">
      <header>
        <h3>💫 Houston, we have a problem! 💫</h3>
        <h5>{{ theProblem | json }}</h5>
      </header>
    </aside>
  `,
  styles: [],
})
export class ProblemCardComponent implements OnInit {
  @Input() theProblem: string;
  constructor() {}

  ngOnInit(): void {}
}
