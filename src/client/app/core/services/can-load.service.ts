import { Injectable } from '@angular/core';
import { Route, CanLoad, Router } from '@angular/router';

@Injectable()
export class CanLoadService implements CanLoad {

    constructor(private _router: Router) {
    }

    canLoad(route: Route) {
        return true;
    }
}
