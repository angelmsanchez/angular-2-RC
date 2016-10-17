import { Routes } from '@angular/router';

import { FilmComponent } from './index';
import { GenreComponent } from './genre/index';

export const FilmRoutes: Routes = [
    { path: 'films', component: FilmComponent },
    { path: 'films/:name', component: GenreComponent }
];
