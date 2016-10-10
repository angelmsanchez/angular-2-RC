import { Component, OnInit } from '@angular/core';

// import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class HomeComponent implements OnInit {
    day: string;
    valueLocalStorage: string;

    ngOnInit() {
        // this.day = moment().format('dddd DD MMMM  YYYY');
    }

    setLocalStorage(value: string): boolean {
        localStorage.setItem('prueba', value);
        return false;
    }

    getLocalStorage(value: string) {
        this.valueLocalStorage = localStorage.getItem('prueba');
    }

}
