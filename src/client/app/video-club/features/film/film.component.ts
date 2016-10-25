import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { VideoClubService } from '../../services/index';
import { Film } from '../../models/index';
import { GenreEnum } from '../../enums/index';
import { Config } from '../../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'app-film',
    templateUrl: './film.html',
    styleUrls: ['./film.css']
})

export class FilmComponent implements OnInit {
    @Input() film: Film;
    public actualType: string;
    public enabledSpinner: boolean = true;
    public urlImg: string = Config.API_IMAGES;
    public genreEnum: string[];

    constructor(private _videoClubService: VideoClubService,
        private _router: Router) {
    }

    ngOnInit() {
        this.urlImg += this.film.poster_path;
        this.getGenres();
    }

    getGenres() {
        this.genreEnum = this.film.genre_ids.map(id => {
            return GenreEnum[id];
        });
    }

    goDetail() {
        console.log('goToDetailFilm', this.film);
    }

}
