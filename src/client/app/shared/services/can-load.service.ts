import { Injectable } from '@angular/core';
import { Route, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { VideoClubService } from './../../video-club/services/video-club.service';
import { Genre } from './../../video-club/models/genre.model';

@Injectable()
export class CanLoadService implements CanLoad {

    constructor(private _router: Router) {
    }

    canLoad(route: Route) {
        return true;
        // var message = 'Unauthorized access denied';
        // let url = `/${route.path}`;
        // console.log('canLoad ' + url);
        // this._router.navigate(['/home'], { queryParams: { redirectTo: url } });
        // this.toastService.activate(this.deniedMessage);
        // return false;
    }

}