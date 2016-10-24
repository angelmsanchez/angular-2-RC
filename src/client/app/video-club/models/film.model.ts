import { FilmInterface } from '../interfaces/index';

export class Film {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    popularity: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

    constructor(film: FilmInterface) {
        this.adult = film.adult;
        this.backdrop_path = film.backdrop_path;
        this.genre_ids = film.genre_ids;
        this.id = film.id;
        this.original_language = film.original_language;
        this.original_title = film.original_title;
        this.overview = film.overview;
        this.release_date = film.release_date;
        this.poster_path = film.poster_path;
        this.popularity = film.popularity;
        this.title = film.title;
        this.video = film.video;
        this.vote_average = film.vote_average;
        this.vote_count = film.vote_count;
    }
}
