import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../shared/config/index';

@Injectable()
export class FilmService {
    private _apiKey: string;

    constructor(private http: Http) {
        this.getApiKey();
    }

    getGenres(endPoint: string) {
        return this.http
            .get(Config.API_FILMS + endPoint + this._apiKey)
            .map(response => response.json());
    }

    getFilms(endPoint: string) {
        return this.http
            .get(Config.API_FILMS + endPoint + this._apiKey)
            .map(response => response.json());
    }

    private getApiKey() {
        this._apiKey = localStorage.getItem('apiKey');
        if (!this._apiKey) {
            localStorage.setItem('apiKey', '?api_key=beabd4845f3d498cd54f79c4cfd9c73a');
            this._apiKey = localStorage.getItem('apiKey');
        }
    }

}
