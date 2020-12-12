import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch.component';

@NgModule({
  declarations: [LaunchComponent],
  imports: [CommonModule, LaunchRoutingModule, SharedModule],
})
export class LaunchModule {}
