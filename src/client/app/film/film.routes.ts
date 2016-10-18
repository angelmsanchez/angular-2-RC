import { Route } from '@angular/router';

import { FilmComponent, GenreComponent } from './index';

export const FilmRoutes: Route[] = [
    { path: 'films', component: FilmComponent },
    { path: 'films/:name', component: GenreComponent }
];
