import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { VideoClubComponent } from './video-club.component';
import { CatalogGenreComponent, CatalogFilmComponent, DetailFilmComponent } from './features/index';
import { VideoClubResolve, VideoClubActivate } from './services/index';

export const routes: Route[] = [
    {
        path: '',
        component: VideoClubComponent,
        children: [
            {
                path: '',
                component: CatalogGenreComponent
            },
            {
                path: ':name',
                component: CatalogFilmComponent,
                canActivate: [VideoClubActivate],
                resolve: {
                    films: VideoClubResolve
                }
            },
            {
                path: ':name/:film',
                component: DetailFilmComponent,
                canActivate: [VideoClubActivate],
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class VideoClubRoutingModule { }
