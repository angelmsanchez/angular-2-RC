import { AppState } from './redux/app-state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { createStore, Store, StoreEnhancer } from 'redux';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorHttp } from './interceptor.service';
import { ContribService } from './core/services/contrib.service';
import { CoreModule } from './core/core.module';
import { ToastService } from './core/toast/toast.service';
import { AppStore } from './redux/app-store';
import { counterReducer } from './redux/counter-reducer';

let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
    counterReducer,
    devtools
);

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        CoreModule
        // InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 1000 }),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ContribService,
        {
            provide: APP_BASE_HREF,
            useValue: '<%= APP_BASE %>'
        },
        // {
        //     provide: window,
        //     useValue: window
        // },
        {
            provide: Http,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, router: Router, toastservice: ToastService) =>
                new InterceptorHttp(backend, defaultOptions, router, toastservice),
            deps: [XHRBackend, RequestOptions, Router, ToastService]
        },
        {
            provide: AppStore,
            useValue: store
        }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
