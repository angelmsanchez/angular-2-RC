
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FilmComponent } from './film.component';
import { FilmService } from './film.service';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [FilmComponent],
    exports: [FilmComponent],
    providers: [FilmService]
})

export class FilmModule { }
