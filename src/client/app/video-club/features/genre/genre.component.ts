import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { VideoClubService } from '../../services/index';
import { Genre } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'app-genre',
    templateUrl: './genre.html',
    styleUrls: ['./genre.css']
})

export class GenreComponent {
    @Input() genre: Genre;

    constructor(private _router: Router,
        private _videoClubService: VideoClubService) {
    }

    goTo(): boolean {
        this._videoClubService.setGenre(this.genre);
        console.log('goTo ' + this.genre.name):
        // this._router.navigate(['/video-club', this.genre.name]);
        this._router.navigate(['/video-club', this.genre.name]);
        return false;
    }
}
