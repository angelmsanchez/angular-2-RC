import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';
import { FilmModule } from './film/film.module';
import 'rxjs/Rx';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), HomeModule, SharedModule.forRoot(), PomodoroModule, FilmModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
