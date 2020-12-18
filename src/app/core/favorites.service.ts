import { Injectable } from '@angular/core';
import { Favorites } from './favorites.interface';

@Injectable()
export class FavoritesService implements Favorites {
  private favoritesKey = 'favoriteLaunches';
  constructor() {}

  add(slug: string) {
    let favoriteLaunches: string[] = this.getList();
    favoriteLaunches.push(slug);
    const favoriteLaunchesStored = JSON.stringify(favoriteLaunches);
    localStorage.setItem(this.favoritesKey, favoriteLaunchesStored);
  }
  getList(): string[] {
    const favoriteLaunchesStored = localStorage.getItem(this.favoritesKey);
    let favoriteLaunches: string[] = [];
    if (favoriteLaunchesStored != undefined) {
      favoriteLaunches = JSON.parse(favoriteLaunchesStored);
    }
    return favoriteLaunches;
  }
}
