import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { VideoClubService } from '../../index';
import { Genre } from '../../model/index';

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
        this._router.navigate(['/video-club', this.genre.name]);
        return false;
    }
}
