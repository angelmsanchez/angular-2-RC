import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { ToastService } from './../core/toast/toast.service';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})

export class HomeComponent implements OnInit {
    public day: string;
    public activeSpinner: boolean = true;

    constructor(private _router: Router
        // private _toastService: ToastServic
    ) {
        // ) {
    }

    ngOnInit() {
        setTimeout(() => this.activeSpinner = false, 5000);
    }

    goTo(endPoint: string) {
        this._router.navigate([endPoint]);
    }

}
