import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { LocationComponent } from './location/location.component';
import { MissionComponent } from './mission/mission.component';
import { ProblemCardComponent } from './problem-card/problem-card.component';
import { WaitingCardComponent } from './waiting-card/waiting-card.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';

@NgModule({
  declarations: [
    LaunchCardComponent,
    ProblemCardComponent,
    WaitingCardComponent,
    LocationComponent,
    MissionComponent,
    ServiceProviderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LaunchCardComponent, ProblemCardComponent, WaitingCardComponent],
})
export class SharedModule {}
