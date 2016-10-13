import { Component } from '@angular/core';

import { FilmService } from '../film.service';

@Component({
    moduleId: module.id,
    selector: 'app-genre',
    templateUrl: './genre.html',
    styleUrls: ['./genre.css']
})

export class GenreComponent {
    public genres: Object[];
    public actualType: string;

    constructor(private filmService: FilmService) {
        console.log('GenreComponent');
    }

    getList(endPointType: string, type?: string) {
        this.actualType = type;
        let endPoint: string = 'genre/' + endPointType + '/list';
        this.filmService
            .get(endPoint)
            .subscribe((data: any) => this.genres = data.genres);
    }
}
