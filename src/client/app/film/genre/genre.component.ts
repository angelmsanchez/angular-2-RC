import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private _filmService: FilmService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getId();
    }

    goDetail(film: Object) {
        console.log('goToDetailFilm', film);
    }

    private getId() {
        setTimeout(() => {
            console.log('timeout 2');
            this._route.params
                .subscribe(params => {
                    this.getList(+params['id']);
                });
        }, 3000);
    }

    private getList(idGenre: number) {
        let endPoint: string = 'genre/' + idGenre + '/movies';
        this._filmService
            .getFilms(endPoint)
            .subscribe(data => this.films = data.results);
    }

}
