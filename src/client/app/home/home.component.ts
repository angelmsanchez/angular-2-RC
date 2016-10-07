import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class HomeComponent implements OnInit {
    day: string;
    // valueLocalStorage: string;

    ngOnInit() {
        this.day = moment().format('dddd DD MMMM  YYYY');
    }

    setLocalStorage(value: string): boolean {
        // sessionStorage.setItem('localStorage', value);
        localStorage.setItem('localStorage-2', value);
        return false;
    }

    // getLocalStorage(value: string) {
    //     this.valueLocalStorage = localStorage.getItem('localStorage');
    //     console.log('this.valueLocalStorage ' + this.valueLocalStorage);
    // }

}
