import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VideoClubService } from '../../services/index';
import { Genre, Film } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'app-catalog-genre',
    templateUrl: './catalog-genre.html',
    styleUrls: ['./catalog-genre.css']
})

export class CatalogGenreComponent implements OnInit {
    public genres: Object[];
    public type: string;
    public genre: Genre;
    public activeSpinner: boolean = false;

    constructor(private _videoClubService: VideoClubService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {
        console.log('catalog-genre-component');
    }

    ngOnInit() {
        console.log('catalog-genre-component');
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
