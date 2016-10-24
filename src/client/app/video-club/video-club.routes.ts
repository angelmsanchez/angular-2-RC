import { Route } from '@angular/router';

import { VideoClubComponent } from './index';
import { CatalogComponent, FilmComponent } from './features/index';
import { VideoClubResolve } from './services/index';

export const VideoClubRoutes: Route[] = [
    {
        path: 'video-club',
        component: VideoClubComponent
    },
    {
        path: 'video-club/:name',
        component: CatalogComponent,
        resolve: {
            films: VideoClubResolve
        }
    },
    {
        path: 'video-club/:name/:film',
        component: FilmComponent
    }
];

