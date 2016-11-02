import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VideoClubComponent } from './video-club.component';
import { VideoClubService, VideoClubResolve, VideoClubActivate } from './services/index';
import { GenreComponent, CatalogComponent, FilmComponent, DetailFilmComponent } from './features/index';
import { VideoClubRoutes } from './video-club.route';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(VideoClubRoutes)
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
        RouterModule
    ],
    providers: [
        VideoClubService,
        VideoClubResolve,
        VideoClubActivate
    ]
})

export class VideoClubModule { }
