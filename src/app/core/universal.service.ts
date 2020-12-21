import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniversalService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  isPlatformServer() {
    return isPlatformServer(this.platformId);
  }
}
