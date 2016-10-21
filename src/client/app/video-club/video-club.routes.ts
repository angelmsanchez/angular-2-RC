import { Route } from '@angular/router';

import { VideoClubComponent } from './index';
import { CatalogComponent, FilmComponent } from './features/index';

export const VideoClubRoutes: Route[] = [
    { path: 'video-club', component: VideoClubComponent },
    { path: 'video-club/:name', component: CatalogComponent },
    { path: 'video-club/:name/:film', component: FilmComponent }
];

