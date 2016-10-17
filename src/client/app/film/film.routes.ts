import { Routes } from '@angular/router';

import { FilmComponent, GenreComponent } from './index';

export const FilmRoutes: Routes = [
    { path: 'films', component: FilmComponent },
    { path: 'films/:name', component: GenreComponent }
];
