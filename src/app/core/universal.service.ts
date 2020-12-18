import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UniversalService {
  constructor(@Inject(PLATFORM_ID) private platformId: any, private ts: TransferState) {}
  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  isPlatformServer() {
    return isPlatformServer(this.platformId);
  }

  getTransferedData(key: string) {
    if (this.isPlatformServer()) {
      return null;
    }
    const stateKey = makeStateKey<Object>(key);
    if (this.ts.hasKey(stateKey)) {
      const cachedObject = this.ts.get<Object>(stateKey, null);
      console.log('✅ Got cache for ' + key);
      this.ts.remove(stateKey);
      return cachedObject;
    } else {
      console.log('🚫 No cache for ' + key);
      return null;
    }
  }
  setDataToTransfer(key: string, data: Object) {
    if (this.isPlatformBrowser()) {
      return;
    }
    const stateKey = makeStateKey<Object>(key);
    this.ts.set<Object>(stateKey, data);
  }
}
