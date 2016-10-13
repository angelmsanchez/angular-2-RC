import { Route } from '@angular/router';

import { FilmComponent } from './index';
import { GenreComponent } from './genre/index';

export const FilmRoutes: Route[] = [
    {
        path: 'films',
        component: FilmComponent
    },
    {
        path: 'films/genres',
        component: GenreComponent
    }
];
