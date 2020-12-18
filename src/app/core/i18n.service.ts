import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private userLang: string;

  constructor() {
    this.userLang = window.navigator.language;
  }

  public getDateFormat(): string {
    if (this.userLang.indexOf('-US') >= 0) {
      return 'MM/dd/yyyy hh:mm a';
    } else {
      return 'dd/MM/yyyy HH:mm';
    }
  }
}
