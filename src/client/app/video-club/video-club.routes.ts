import { Route } from '@angular/router';

import { VideoClubComponent } from './index';
import { FilmComponent } from './features/index';

export const VideoClubRoutes: Route[] = [
    { path: 'video-club', component: VideoClubComponent },
    { path: 'video-club/:name', component: FilmComponent }
];

