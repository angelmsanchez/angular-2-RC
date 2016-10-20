import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VideoClubComponent } from './video-club.component';
import { VideoClubService } from './video-club.service';
import { GenreComponent, FilmComponent } from './features/index';
import { VideoClubRoutes } from './video-club.routes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(VideoClubRoutes)
    ],
    declarations: [
        VideoClubComponent,
        GenreComponent,
        FilmComponent
    ],
    exports: [
        VideoClubComponent,
        RouterModule
    ],
    providers: [
        VideoClubService
    ]
})

export class VideoClubModule { }
