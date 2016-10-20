import { Component, OnInit } from '@angular/core';

import { VideoClubService } from './video-club.service';
import { Genre } from './model/index';

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

    constructor(private _videoClubService: VideoClubService) {
    }

    ngOnInit() {
        this.type = this._videoClubService.getType();
        if (this.type) {
            this.getList(this.type);
        }
    }

    getList(type: string) {
        this.type = type;
        this._videoClubService.setType(type);
        let endPoint: string = 'genre/' + this.type + '/list';
        this._videoClubService
            .getGenres(endPoint)
            .subscribe((data: any) => this.genres = data.genres);
    }

}
