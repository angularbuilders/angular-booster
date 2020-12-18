import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../api-result';
import { Launch } from '../launch';
import { QueryParams } from '../query-params';
import { UniversalService } from './universal.service';

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  private launchesUrl = `${environment.rootUrl}launch/`;
  private modeList = 'mode=list';

  constructor(private http: HttpClient, private universal: UniversalService) {}

  getUpcomingLaunches$(limit = 10): Observable<Launch[]> {
    const url = `${this.launchesUrl}upcoming/?limit=${limit}&${this.modeList}`;
    const transferedResult = this.universal.getTransferedObject(url);
    if (transferedResult) {
      return of(transferedResult);
    } else {
      return this.http.get<ApiResult>(url).pipe(
        map(data => data.results),
        tap(data => this.universal.setObjectToTransfer(url, data))
      );
    }
    // return this.http.get<ApiResult>(url).pipe(map(data => data.results));
  }

  getSearchedLaunches$(queryParams: QueryParams): Observable<Launch[]> {
    const url = `${this.launchesUrl}?limit=${queryParams.limit}&search=${queryParams.searchTerm}&${this.modeList}`;
    return this.http.get<ApiResult>(url).pipe(map(data => data.results));
  }

  getLaunch$(id: string): Observable<Launch> {
    const url = `${this.launchesUrl}${id}`;
    const transferedResult = this.universal.getTransferedObject(url);
    if (transferedResult) {
      return of(transferedResult);
    } else {
      return this.http
        .get<Launch>(url)
        .pipe(tap(data => this.universal.setObjectToTransfer(url, data)));
    }
  }
  getLaunchBySlug$(slug: string): Observable<Launch> {
    const url = `${this.launchesUrl}?slug=${slug}`;
    const transferedResult = this.universal.getTransferedObject(url);
    if (transferedResult) {
      return of(transferedResult);
    } else {
      return this.http.get<ApiResult>(url).pipe(
        map(data => data.results[0]),
        tap(data => this.universal.setObjectToTransfer(url, data))
      );
    }
  }
}
