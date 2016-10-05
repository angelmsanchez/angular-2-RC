
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FilmComponent } from './film.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [FilmComponent],
    exports: [FilmComponent]
})

export class FilmModule { }
