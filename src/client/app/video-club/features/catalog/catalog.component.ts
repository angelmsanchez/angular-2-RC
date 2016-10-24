import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VideoClubService } from '../../video-club.service';
import { Genre } from '../../model/index';

@Component({
    moduleId: module.id,
    selector: 'app-catalog',
    templateUrl: './catalog.html',
    styleUrls: ['./catalog.css']
})

export class CatalogComponent implements OnInit {
    public films: Object[];
    public enabledSpinner: boolean = true;
    public genre: Genre;

    constructor(private _videoClubService: VideoClubService,
        // private _route: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit() {
        this.genre = this._videoClubService.getGenre();
        if (this.genre) {
            this.getList();
        } else {
            this._router.navigate(['video-club']);
        }
    }

    // private getId() {
    //     setTimeout(() => {
    //         this._route.params
    //             .subscribe(params => {
    //                 this.getList(+params['id']);
    //             });
    //     }, 3000);
    // }

    private getList() {
        let endPoint: string = 'genre/' + this.genre.id + '/movies';
        this._videoClubService
            .getFilms(endPoint)
            .subscribe(data => {
                this.films = data;
                this.enabledSpinner = false;
            });
    }

}
