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

  getTransferedObject(key: string) {
    let dataCached = null;
    if (this.isPlatformServer()) {
      return dataCached;
    }
    const stateKey = makeStateKey<Object>(key);
    if (this.ts.hasKey(stateKey)) {
      dataCached = this.ts.get<Object>(stateKey, null);
      console.log('got cache for ' + key);
      console.log({ dataCached });
      this.ts.remove(stateKey);
    } else {
      console.log('No cache for ' + key);
    }
    return dataCached;
  }
  setObjectToTransfer(key: string, data: Object) {
    if (this.isPlatformBrowser()) {
      return;
    }
    const stateKey = makeStateKey<Object>(key);
    this.ts.set<Object>(stateKey, data);
  }
}
