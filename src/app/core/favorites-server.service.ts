import { Injectable } from '@angular/core';
import { Favorites } from './favorites.interface';

@Injectable()
export class FavoritesServerService implements Favorites {
  constructor() {}
  add(slug: string): void {
    return;
  }
  getList(): string[] {
    return [];
  }
}
