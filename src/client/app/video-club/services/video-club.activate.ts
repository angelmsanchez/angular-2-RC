import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { VideoClubService } from './video-club.service';

@Injectable()
export class VideoClubActivate implements CanActivate {

    constructor(private _router: Router,
        private _videoClubService: VideoClubService) {
    }

    canActivate() {
        return !!this._videoClubService.getGenre().id;
    }
}