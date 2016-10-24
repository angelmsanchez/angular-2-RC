import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VideoClubService } from '../../services/index';
import { Genre, Film } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'app-catalog',
    templateUrl: './catalog.html',
    styleUrls: ['./catalog.css']
})

export class CatalogComponent implements OnInit {
    public films: Film[];
    public enabledSpinner: boolean = true;
    public genre: Genre;

    constructor(private _videoClubService: VideoClubService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit() {
        this.films = this._activatedRoute.snapshot.data['films'];
        this.genre = this._videoClubService.getGenre();
        if (!this.genre) {
            this._router.navigate(['video-club']);
        }
        this.enabledSpinner = false;
    }

    // private getId() {
    //     setTimeout(() => {
    //         this._route.params
    //             .subscribe(params => {
    //                 this.getList(+params['id']);
    //             });
    //     }, 3000);
    // }

}
