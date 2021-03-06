import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from './../core/toast/toast.service';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.html'
})

export class HomeComponent implements OnInit {
    public day: string;
    public activeSpinner: boolean = true;

    constructor(private _router: Router,
        private _toastService: ToastService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.activeSpinner = false;
            this._toastService.activate('Home Component');
        }, 3000);
    }

    goTo(endPoint: string) {
        this._router.navigate([endPoint]);
    }

}
