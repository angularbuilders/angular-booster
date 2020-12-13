import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'favoriteLaunches';
  constructor() {}

  add(slug: string) {
    let favoriteLaunchesStored = localStorage.getItem(this.favoritesKey);
    const favoriteLaunches: string[] = JSON.parse(favoriteLaunchesStored);
    favoriteLaunches.push(slug);
    favoriteLaunchesStored = JSON.stringify(favoriteLaunches);
    localStorage.setItem(slug, favoriteLaunchesStored);
  }
  list() {
    const favoriteLaunchesStored = localStorage.getItem(this.favoritesKey);
    const favoriteLaunches: string[] = JSON.parse(favoriteLaunchesStored);
    return favoriteLaunches;
  }
}
