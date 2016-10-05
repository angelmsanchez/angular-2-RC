import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContribService {
  // private _cache: Object = {};

  constructor(private http: Http) {
  }

  // getContrib(endPoint: string) {
  //     if (this._cache.hasOwnProperty(endPoint)) {
  //         return this._cache[endPoint];
  //     }

  //     let observable = this.http
  //         .get(`${Constants.ENDPOINTS}` + endPoint)
  //         .map(response => response.json())
  //         .catch(this.handleError);

  //     this._cache[endPoint] = observable;

  //     return observable;
  // }

  getContrib(endPoint: string) {
    return this.http
      .get('http://localhost:4444/' + endPoint)
      .map(response => response.json());
  }

}
