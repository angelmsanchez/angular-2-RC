import { Component } from '@angular/core';

import { FilmService } from './film.service';

@Component({
    moduleId: module.id,
    selector: 'app-film',
    templateUrl: './film.html',
    styleUrls: ['./film.css']
})

export class FilmComponent {

    constructor(private filmService: FilmService) {
        console.log('FilmComponent: ' + this.filmService);
    }
}
