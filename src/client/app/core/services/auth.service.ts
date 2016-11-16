import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { VideoClubService } from './../../video-club/services/video-club.service';
import { Genre } from './../../video-club/models/genre.model';

@Injectable()
export class AuthService implements CanActivate {
    constructor(private _router: Router,
        private _videoClubService: VideoClubService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        let existGenre: Genre = this._videoClubService.getGenre();

        if (existGenre) { return true; };
        this._router.navigate(['/home']);
        return false;
    }
}
