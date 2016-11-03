import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AuthService } from './../shared/services/auth.service';
import { VideoClubComponent } from './video-club.component';
import { CatalogGenreComponent, CatalogComponent, DetailFilmComponent } from './features/index';
import { VideoClubResolve, VideoClubActivate } from './services/index';

// export const routes: Route[] = [
//     {
//         path: 'video-club',
//         component: VideoClubComponent,
//         // canActivate: [AuthService]
//     },
//     {
//         path: 'video-club/:name',
//         component: CatalogComponent,
//         canActivate: [VideoClubActivate],
//         resolve: {
//             films: VideoClubResolve
//         }
//     },
//     {
//         path: 'video-club/:name/:film',
//         component: DetailFilmComponent,
//         canActivate: [VideoClubActivate],
//     }
// ];

export const routes: Route[] = [
    {
        path: 'video-club',
        component: VideoClubComponent,
        // canActivate: [AuthService]
        children: [
            {
                path: '',
                component: CatalogGenreComponent
            },
            {
                path: '/:name',
                component: CatalogComponent,
                canActivate: [VideoClubActivate],
                resolve: {
                    films: VideoClubResolve
                }
            },
            {
                path: '/:name/:film',
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
    ],
    providers: [
        AuthService
    ]
})
export class VideoClubRoutingModule { }
