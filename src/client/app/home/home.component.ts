import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class HomeComponent {
    public day: string;
    public valueLocalStorage: string;

    constructor(private _router: Router) {
    }

    setLocalStorage(value: string): boolean {
        localStorage.setItem('prueba', value);
        return false;
    }

    getLocalStorage(value: string) {
        this.valueLocalStorage = localStorage.getItem('prueba');
    }

    goTo(endPoint: string) {
        this._router.navigate([endPoint]);
    }

}
