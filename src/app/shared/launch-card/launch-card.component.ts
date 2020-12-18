import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'src/app/core/i18n.service';
import { Launch } from 'src/app/launch';

@Component({
  selector: 'ab-launch-card',
  template: `
    <aside *ngIf="launch">
      <h3>
        <a [routerLink]="['/launch/' + launch.slug]"> {{ launch.name }}</a>
      </h3>
      <p class="{{ launch.status.name | lowercase }}">
        <b>on {{ launch.net | date: dateFormat }}</b>
      </p>
      <ab-location [launch]="launch"></ab-location>
      <ab-mission [launch]="launch"></ab-mission>
      <ab-service-provider [launch]="launch"></ab-service-provider>
      <button *ngIf="allowAddToFavorites" (click)="onClicAddToFavorites()">
        Add to favorites 🤍
      </button>
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
  @Input() allowAddToFavorites = false;
  @Output() addToFavorites = new EventEmitter<string>();

  dateFormat: string;

  constructor(i18n: I18nService) {
    this.dateFormat = i18n.getDateFormat();
  }

  ngOnInit(): void {}
  onClicAddToFavorites() {
    this.addToFavorites.emit(this.launch.slug);
  }
}
