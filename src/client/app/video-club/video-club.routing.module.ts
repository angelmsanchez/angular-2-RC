// import { Route } from '@angular/router';

// import { VideoClubComponent } from './index';
import { CatalogComponent, DetailFilmComponent } from './features/index';
import { VideoClubResolve, VideoClubActivate } from './services/index';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoClubComponent } from './index';

const routes: Routes = [
    {
        path: '',
        component: VideoClubComponent,
        // data: {
        //     title: 'Video Club Component'
        // },
        children: [
            {
                path: '/:name',
                component: CatalogComponent,
                // canActivate: [VideoClubActivate],
                // resolve: {
                //     films: VideoClubResolve
                // },
                // children: [
                //     {
                //         path: '/:film',
                //         component: DetailFilmComponent
                //     }
                // ]
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
})
export class VideoClubRoutingModule { }

export const routedComponents = [VideoClubComponent];

// export const VideoClubRoutes: Route[] = [
    // {
    //     path: '',
    //     component: VideoClubComponent,
    //     data: {
    //         title: 'Video Club Component'
    //     },
    //     children: [
    //         {
    //             path: '/:name',
    //             component: CatalogComponent,
    //             canActivate: [VideoClubActivate],
    //             resolve: {
    //                 films: VideoClubResolve
    //             },
    //             children: [
    //                 {
    //                     path: '/:film',
    //                     component: DetailFilmComponent
    //                 }
    //             ]
    //         }
    //     ]
    // }];