import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config } from '../shared/config/index';
import { Genre } from './model/index';

@Injectable()
export class VideoClubService {
    private _apiKey: string;
    private _genre: Genre;
    private _type: string;

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

    setType(type: string) {
        this._type = type;
    }

    getType() {
        return this._type;
    }

    setGenre(genrer: Genre) {
        this._genre = genrer;
    }

    getGenre() {
        return this._genre;
    }

    ///////////////////

    private getApiKey() {
        this._apiKey = localStorage.getItem('apiKey');
        if (!this._apiKey) {
            localStorage.setItem('apiKey', '?api_key=beabd4845f3d498cd54f79c4cfd9c73a');
            this._apiKey = localStorage.getItem('apiKey');
        }
    }

}
