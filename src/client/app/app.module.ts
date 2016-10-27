import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';
import { VideoClubModule } from './video-club/video-club.module';
import { InterceptorHttp } from './interceptor.service';
import { HomeComponent } from './home/index';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        HomeModule,
        PomodoroModule,
        VideoClubModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    }, {
        provide: window,
        useValue: window
    },
    {
        provide: Http,
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, router: Router) => new InterceptorHttp(backend, defaultOptions, router),
        deps: [XHRBackend, RequestOptions]
    }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
