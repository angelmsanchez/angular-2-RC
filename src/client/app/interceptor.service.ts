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
        // this._router.navigate(['video-club']);
        return super
            .request(url, options)
            .catch((res: Response) => {
                console.log('catch request');
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