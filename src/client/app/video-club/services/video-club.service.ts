import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Config } from '../../shared/config/index';
import { Genre, Film } from '../models/index';
import { GenreInterface, FilmInterface } from '../interfaces/index';

@Injectable()
export class VideoClubService {
    private _apiKey: string;
    private _genre: Genre;
    private _type: string;
    private _filmsById: any = {};

    constructor(private http: Http) {
        this.getApiKey();
    }

    getGenres(endPoint: string) {
        return this.http
            .get(Config.API_FILMS + endPoint + this._apiKey)
            .map((response: Response) => {
                return <GenreInterface[]>response.json().genres.map((genre: GenreInterface) => {
                    return new Genre(genre);
                });
            });
    }

    getFilms(id: number) {
        if (!this._filmsById[id]) {
            const endPoint = 'genre/' + id + '/movies';
            return this.http
                .get(Config.API_FILMS + endPoint + this._apiKey)
                .debounceTime(5000)
                .map((response: Response) => {
                    this._filmsById[id] = <FilmInterface[]>response.json().results.map((film: FilmInterface) => {
                        return new Film(film);
                    });
                    return this._filmsById[id];
                });
        } else {
            return this._filmsById[id];
        }

    }

    setType(type: string) {
        this._type = type;
    }

    getType() {
        return this._type;
    }

    setGenre(genre: Genre) {
        this._genre = genre;
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
