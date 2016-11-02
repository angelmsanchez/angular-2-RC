import { Component, OnInit } from '@angular/core';

import { VideoClubService } from './services/index';
import { Genre } from './models/index';

@Component({
    moduleId: module.id,
    selector: 'app-video-club',
    templateUrl: './video-club.html',
    styleUrls: ['./video-club.css']
})

export class VideoClubComponent implements OnInit {
    public genres: Object[];
    public type: string;
    public genre: Genre;
    public activeSpinner: boolean = false;

    constructor(private _videoClubService: VideoClubService) {
    }

    ngOnInit() {
        this.type = this._videoClubService.getType();
        if (this.type) {
            this.getList(this.type);
        }
    }

    getList(type: string) {
        this.activeSpinner = true;
        this.type = type;
        this._videoClubService.setType(type);
        let endPoint: string = 'genre/' + this.type + '/list';
        setTimeout(() => {
            this._videoClubService
                .getGenres(endPoint)
                .subscribe((data: any) => {
                    this.genres = data;
                    this.activeSpinner = false;
                });
        }, 3000);

    }

}
