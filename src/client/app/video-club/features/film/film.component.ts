import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { VideoClubService } from '../../video-club.service';

@Component({
    moduleId: module.id,
    selector: 'app-film',
    templateUrl: './film.html',
    styleUrls: ['./film.css']
})

export class FilmComponent implements OnInit {
    @Input() film: Object;
    public actualType: string;
    public enabledSpinner: boolean = true;

    constructor(private _videoClubService: VideoClubService,
        private _router: Router) {
    }

    ngOnInit() {
        console.log('ngOnInit FilmComponent');
    }

    goDetail(VideoClub: Object) {
        console.log('goToDetailFilm', VideoClub);
    }

}
