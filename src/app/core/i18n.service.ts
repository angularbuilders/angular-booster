import { Injectable } from '@angular/core';
import { UniversalService } from './universal.service';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  constructor(private universal: UniversalService) {}

  public getDateFormat(): string {
    if (this.universal.isPlatformBrowser()) {
      const userLang = window.navigator.language;
      if (userLang.indexOf('-US') >= 0) {
        return 'MM/dd/yyyy hh:mm a';
      }
      return 'dd/MM/yyyy HH:mm';
    }
  }
}
