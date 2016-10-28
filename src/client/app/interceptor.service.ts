import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class InterceptorHttp extends Http {

    constructor(backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        private _router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super
            .request(url, options)
            .catch((error: Response) => {
                console.log('catch request');
                return Observable.throw(error.json().error || 'Server error');
                // this._router.navigate(['']);
            });
    }

    // get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     return super
    //         .get(url, options)
    //         .catch((error) => {
    //             console.log('super get: ', error);
    //         });
    // }
}
