import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { VideoClubComponent } from './video-club.component';
import { VideoClubService, VideoClubResolve, VideoClubActivate } from './services/index';
import { GenreComponent, CatalogComponent, FilmComponent, DetailFilmComponent } from './features/index';
import { VideoClubRoutingModule } from './video-club.routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        VideoClubRoutingModule
    ],
    declarations: [
        VideoClubComponent,
        GenreComponent,
        CatalogComponent,
        FilmComponent,
        DetailFilmComponent
    ],
    exports: [
        VideoClubComponent
    ],
    providers: [
        VideoClubService,
        VideoClubResolve,
        VideoClubActivate
    ]
})

export class VideoClubModule { }
