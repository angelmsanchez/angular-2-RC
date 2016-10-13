import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../shared/config/index';

@Injectable()
export class FilmService {
    apiKey: string = '?api_key=beabd4845f3d498cd54f79c4cfd9c73a';

    constructor(private http: Http) {
    }

    get(endPoint: string) {
        return this.http
            .get(Config.API_FILMS + endPoint + this.apiKey)
            .map(response => response.json());
    }

}
