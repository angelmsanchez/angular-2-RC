import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from './../../shared/config/env.config';
import { ToastService } from './../toast/toast.service';

@Injectable()
export class ContribService {
    // private _cache: Object = {};

    constructor(private _http: Http,
        // private _toastService: ToastService
        ) {
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
        return this._http
            .get(Config.API_LOCALHOST + endPoint)
            .map(response => {
                response.json();
                // this._toastService.activate('prueba toaster');
            });
    }

}
