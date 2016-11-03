import { Component, OnInit } from '@angular/core';

import { VideoClubService } from '../../services/index';
import { Genre } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'app-catalog-genre',
    templateUrl: './catalog-genre.html',
    styleUrls: ['./catalog-genre.css']
})

export class CatalogGenreComponent implements OnInit {
    public genres: Genre[];
    public type: string;
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
        }, 1000);

    }
}
