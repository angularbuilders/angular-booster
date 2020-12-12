import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { ProblemCardComponent } from './problem-card/problem-card.component';
import { WaitingCardComponent } from './waiting-card/waiting-card.component';



@NgModule({
  declarations: [LaunchCardComponent, ProblemCardComponent, WaitingCardComponent],
  imports: [
    CommonModule
  ],
  exports: [LaunchCardComponent, ProblemCardComponent, WaitingCardComponent]
})
export class SharedModule { }
