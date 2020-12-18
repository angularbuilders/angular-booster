import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavoritesServerService } from './favorites-server.service';
import { FavoritesService } from './favorites.service';
import { UniversalService } from './universal.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: FavoritesService,
      useFactory: (universal: UniversalService) => {
        if (universal.isPlatformBrowser()) {
          return new FavoritesService();
        } else {
          return new FavoritesServerService();
        }
      },
      deps: [UniversalService],
    },
  ],
})
export class CoreModule {}
