import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContribService } from './../contrib.service';

// import { ContribService } from './../core/services/contrib.service';
// import { ToastService } from './../core/toast/toast.service';
// import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class HomeComponent implements OnInit {
    public day: string;
    // public activeSpinner: boolean = true;
    public headerContent: Object;

    constructor(private _router: Router,
        private _contribService: ContribService
        // private _toastService: ToastServic
    ) {
        console.log('constructor home');
        _contribService.getContrib('home-component');

        // ) {
    }

    ngOnInit() {
        // setTimeout(() => this.activeSpinner = false, 5000);
        // this.contribComun();
    }

    // private contribComun() {
    //     this._contribService
    //         .getContrib('comun')
    //         // .do(() => this._toastService.activate('prueba angel'))
    //         .subscribe((data: any) => {
    //             this.headerContent = data;
    //             console.log('subscribe contribComun');
    //         });
    //     console.log('home home home contribComun');
    // }

    goTo(endPoint: string) {
        this._router.navigate([endPoint]);
    }

}
