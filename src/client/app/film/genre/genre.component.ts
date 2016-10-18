import { Component, OnInit } from '@angular/core';

import { FilmService } from '../film.service';

@Component({
    moduleId: module.id,
    selector: 'app-genre',
    templateUrl: './genre.html',
    styleUrls: ['./genre.css']
})

export class GenreComponent implements OnInit {
    public films: Object[];
    public actualType: string;

    constructor(private _filmService: FilmService) {
    }

    ngOnInit() {
        let type: string = '/movies';
        this.getList(type);
    }

    getList(type: string) {
        this.actualType = type;
        let endPoint: string = 'genre/' + 28 + type;
        this._filmService
            .getFilms(endPoint)
            .subscribe((data: any) => this.films = data.results);
    }

    goDetail(nameFilm: string) {
        console.log('goToDetailFilm');
    }
}
