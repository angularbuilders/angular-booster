import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'favoriteLaunches';
  constructor() {}

  add(slug: string) {
    let favoriteLaunches: string[] = this.getList();
    favoriteLaunches.push(slug);
    const favoriteLaunchesStored = JSON.stringify(favoriteLaunches);
    localStorage.setItem(this.favoritesKey, favoriteLaunchesStored);
  }
  getList() {
    const favoriteLaunchesStored = localStorage.getItem(this.favoritesKey);
    let favoriteLaunches: string[] = [];
    if (favoriteLaunchesStored != undefined) {
      favoriteLaunches = JSON.parse(favoriteLaunchesStored);
    }
    return favoriteLaunches;
  }
}
