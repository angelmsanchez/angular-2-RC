import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ToastService } from './core/toast/toast.service';

@Injectable()
export class InterceptorHttp extends Http {

    constructor(backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        router: Router,
        toastService: ToastService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super
            .request(url, options)
            .catch((error: Response) => {
                console.log('catch request');
                // this._toastService.activate('Error Service: ' + error);
                // this._router.navigate(['/pomodoro']);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
