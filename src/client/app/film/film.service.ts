import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../shared/config/index';

@Injectable()
export class FilmService {

    constructor(private http: Http) {
        console.log('FilmService: ' + Config.API_FILMS);
    }

    getContrib(endPoint: string) {
        return this.http
            .get(Config.API_FILMS + endPoint)
            .map(response => response.json());
    }

}
