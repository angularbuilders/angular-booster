import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { ProblemCardComponent } from './problem-card/problem-card.component';
import { WaitingCardComponent } from './waiting-card/waiting-card.component';

@NgModule({
  declarations: [LaunchCardComponent, ProblemCardComponent, WaitingCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [LaunchCardComponent, ProblemCardComponent, WaitingCardComponent],
})
export class SharedModule {}
