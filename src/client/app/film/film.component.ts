import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilmService } from './film.service';

@Component({
    moduleId: module.id,
    selector: 'app-film',
    templateUrl: './film.html',
    styleUrls: ['./film.css']
})

export class FilmComponent implements OnInit {
    public genres: Object[];
    public actualType: string;

    constructor(private router: Router,
        private _filmService: FilmService) {
        console.log('constructor: FilmComponent');

    }

    ngOnInit() {
        console.log('ngOnInit: FilmComponent');
    }

    getList(endPointType: string, type?: string) {
        this.actualType = type;
        let endPoint: string = 'genre/' + endPointType + '/list';
        this._filmService
            .getGenres(endPoint)
            .subscribe((data: any) => this.genres = data.genres);
    }

    goTo(idGender: number) {
        this.router.navigate(['/films', idGender]);
    }

}
