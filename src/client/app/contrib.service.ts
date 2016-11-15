import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContribService {

    constructor(private _http: Http) {
        console.log('create Contrib-service');
    }

    getContrib(endPoint: string) {
        console.log('getContrib: ' + endPoint);
    }

}
