import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FilmComponent } from './film.component';
import { FilmService } from './film.service';
import { GenreComponent } from './genre/genre.component';
import { FilmRoutes } from './film.routes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(FilmRoutes)
        ],
    declarations: [
        FilmComponent,
        GenreComponent
        ],
    exports: [
        FilmComponent,
        RouterModule
        ],
    providers: [
        FilmService
        ]
})

export class FilmModule { }
