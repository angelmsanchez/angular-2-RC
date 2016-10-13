
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FilmComponent } from './film.component';
import { FilmService } from './film.service';
import { GenreComponent } from './genre/genre.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [FilmComponent, GenreComponent],
    exports: [FilmComponent],
    providers: [FilmService]
})

export class FilmModule { }
