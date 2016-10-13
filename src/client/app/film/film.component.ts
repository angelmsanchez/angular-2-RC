import { Component } from '@angular/core';

import { FilmService } from './film.service';

@Component({
    moduleId: module.id,
    selector: 'app-film',
    templateUrl: './film.html',
    styleUrls: ['./film.css']
})

export class FilmComponent {
    public genres: Object[];
    public actualType: string;

    constructor(private filmService: FilmService) {
    }

    getList(endPointType: string, type?: string) {
        this.actualType = type;
        let endPoint: string = 'genre/' + endPointType + '/list';
        this.filmService
            .get(endPoint)
            .subscribe((data: any) => this.genres = data.genres);
    }
}
