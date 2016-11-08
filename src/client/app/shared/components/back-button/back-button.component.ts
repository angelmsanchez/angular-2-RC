import { Component, Inject } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-back-button',
    templateUrl: 'back-button.html',
    styleUrls: ['back-button.css']
})

export class BackButtonComponent {
    public enabledButton: boolean = true;

    constructor(
        @Inject(window) private _window: any) {
    }

    goBack() {
        this._window.history.back();
    }
}
