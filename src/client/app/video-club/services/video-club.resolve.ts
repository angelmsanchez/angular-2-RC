import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { VideoClubService } from './index';
import { FilmInterface } from '../interfaces/index';

@Injectable()
export class VideoClubResolve implements Resolve<FilmInterface[]> {

    constructor(private _videoClubService: VideoClubService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilmInterface[]> {
        const id: number = this._videoClubService.getGenre().id;
        return this._videoClubService.getFilms(id);
    }

}
