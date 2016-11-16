import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

import { Subscription } from 'rxjs/Subscription'

@Component({
    moduleId: module.id,
    selector: 'app-toast',
    templateUrl: 'toast.html',
    styleUrls: ['toast.css']
})
export class ToastComponent implements OnDestroy, OnInit {
    title: string;
    message: string;
    private defaults = {
        title: '',
        message: 'May the Force be with You'
    };
    private toastElement: any;
    private toastSubscription: Subscription;

    constructor(private _toastService: ToastService) {
        console.log('constructor toasterComponent');
        this.toastSubscription = this._toastService.toastState
            .subscribe((toastMessage) => {
                console.log(`activiting toast: ${toastMessage.message}`)
                this.activate(toastMessage.message);
            });
    }

    activate(message = this.defaults.message, title = this.defaults.title) {
        this.title = title;
        this.message = message;
        this.show();
    }

    ngOnInit() {
        this.toastElement = document.getElementById('toast');
    }

    ngOnDestroy() {
        this.toastSubscription.unsubscribe();
    }

    private show() {
        console.log(this.message);
        this.toastElement.style.opacity = 1;
        this.toastElement.style.zIndex = 9999;
        console.log('prueba private show toast');
        window.setTimeout(() => this.hide(), 2500);
    }

    private hide() {
        this.toastElement.style.opacity = 0;
        window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
    }
}
