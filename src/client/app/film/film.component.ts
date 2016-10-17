import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router,
        private filmService: FilmService) {
    }

    getList(endPointType: string, type?: string) {
        this.actualType = type;
        let endPoint: string = 'genre/' + endPointType + '/list';
        this.filmService
            .get(endPoint)
            .subscribe((data: any) => this.genres = data.genres);
    }

    goTo(nameGender: string) {
        this.router.navigate(['/films', nameGender]);
    }

}
