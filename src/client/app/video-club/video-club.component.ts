import { Component, OnInit } from '@angular/core';

import { VideoClubService } from './services/index';

@Component({
    moduleId: module.id,
    selector: 'app-video-club',
    templateUrl: './video-club.html',
    styleUrls: ['./video-club.css']
})

export class VideoClubComponent implements OnInit {
    public activeSpinner: boolean;

    constructor(private _videoClubService: VideoClubService) {
    }

    ngOnInit() {
        this.activeSpinner = this._videoClubService.getEnabledSpinner();
        console.log('VideoClubComponent ' + this.activeSpinner);
    }

}
