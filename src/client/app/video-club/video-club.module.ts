import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VideoClubComponent } from './video-club.component';
import { VideoClubService, VideoClubResolve, VideoClubActivate } from './services/index';
import { GenreComponent, CatalogComponent, FilmComponent, DetailFilmComponent } from './features/index';
import { VideoClubRoutingModule, routedComponents } from './video-club.routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        VideoClubRoutingModule
        // RouterModule.forChild(VideoClubRoutes)
    ],
    declarations: [
        VideoClubComponent,
        GenreComponent,
        CatalogComponent,
        FilmComponent,
        DetailFilmComponent
    ],
    exports: [
        VideoClubComponent,
        // RouterModule
        routedComponents
    ],
    providers: [
        VideoClubService,
        VideoClubResolve,
        VideoClubActivate
    ]
})

export class VideoClubModule { }
