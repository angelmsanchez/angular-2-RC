import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VideoClubService } from './video-club.service';

@Component({
    moduleId: module.id,
    selector: 'app-video-club',
    templateUrl: './video-club.html',
    styleUrls: ['./video-club.css']
})

export class VideoClubComponent implements OnInit {
    public genres: Object[];
    public actualType: string;

    constructor(private router: Router,
        private _filmService: VideoClubService) {
    }

    ngOnInit() {
        // this.actualType = this._filmService.getType();
        // if (this.actualType) {
        //     this.getList(this.actualType);
        // }
        console.log('ngOnInit: VideoClubComponent');
    }

    getList(type: string) {
        this.actualType = type;
        let endPoint: string = 'genre/' + this.actualType + '/list';
        this._filmService
            .getGenres(endPoint)
            .subscribe((data: any) => this.genres = data.genres);
    }

    goTo(idGender: number) {
        this.router.navigate(['/video-club', idGender]);
    }

}
