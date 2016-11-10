import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorHttp } from './interceptor.service';
import { ContribService } from './core/services/contrib.service';
import { CoreModule } from './core/core.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ContribService,
        {
            provide: APP_BASE_HREF,
            useValue: '<%= APP_BASE %>'
        }, {
            provide: window,
            useValue: window
        },
        {
            provide: Http,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, router: Router) =>
                new InterceptorHttp(backend, defaultOptions, router),
            deps: [XHRBackend, RequestOptions]
        }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
