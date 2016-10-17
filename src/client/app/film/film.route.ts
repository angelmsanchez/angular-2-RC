import { Routes } from '@angular/router';

import { FilmComponent } from './index';
import { GenreComponent } from './genre/index';

export const routes: Routes = [
    { path: 'films', component: FilmComponent },
    { path: 'films/:id', component: GenreComponent }
];
