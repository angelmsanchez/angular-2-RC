import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { VideoClubService } from './video-club.service';
import { Genre } from './../models/genre.model';

@Injectable()
export class VideoClubActivate implements CanActivate {

    constructor(private _router: Router,
        private _videoClubService: VideoClubService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkGenre();
    }

    private checkGenre(): boolean {
        let existGenre: Genre = this._videoClubService.getGenre();

        if (existGenre) { return true; };

        this._router.navigate(['/video-club']);
        return false;
    }
}
