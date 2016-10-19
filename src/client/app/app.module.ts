import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';
import { VideoClubModule } from './video-club/video-club.module';
import 'rxjs/Rx';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        HomeModule,
        PomodoroModule,
        VideoClubModule
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
    }],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
