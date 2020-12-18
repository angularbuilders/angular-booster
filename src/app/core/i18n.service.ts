import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  public getDateFormat(): string {
    if (isPlatformBrowser(this.platformId)) {
      const userLang = window.navigator.language;
      if (userLang.indexOf('-US') >= 0) {
        return 'MM/dd/yyyy hh:mm a';
      }
      return 'dd/MM/yyyy HH:mm';
    }
  }
}
