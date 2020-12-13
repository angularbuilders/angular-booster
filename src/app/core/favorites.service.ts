import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'favoriteLaunches';
  constructor() {}

  add(slug: string) {
    let favoriteLaunchesStored = localStorage.getItem(this.favoritesKey);
    let favoriteLaunches: string[] = [];
    if (favoriteLaunchesStored != undefined) {
      favoriteLaunches = JSON.parse(favoriteLaunchesStored);
    }
    favoriteLaunches.push(slug);
    favoriteLaunchesStored = JSON.stringify(favoriteLaunches);
    localStorage.setItem(this.favoritesKey, favoriteLaunchesStored);
  }
  list() {
    const favoriteLaunchesStored = localStorage.getItem(this.favoritesKey);
    const favoriteLaunches: string[] = JSON.parse(favoriteLaunchesStored);
    return favoriteLaunches;
  }
}
