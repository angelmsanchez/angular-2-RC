import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-back-button',
    templateUrl: 'back-button.html',
    styleUrls: ['back-button.css']
})

export class BackButtonComponent implements OnInit {

    public enabledButton: boolean = true;
    public valueText: string = 'angel';

    constructor(
        @Inject(window) private _window: any,
        private route: Router) {
    }

    ngOnInit() {
        console.log('ngOnInit back button', this.route);
    }

    goBack() {
        console.log('goBack back button');
        this._window.history.back();
    }
}
