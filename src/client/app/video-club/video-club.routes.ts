import { Route } from '@angular/router';

import { VideoClubComponent, GenreComponent } from './index';

export const VideoClubRoutes: Route[] = [
    { path: 'video-club', component: VideoClubComponent },
    { path: 'video-club/:id', component: GenreComponent }
];
