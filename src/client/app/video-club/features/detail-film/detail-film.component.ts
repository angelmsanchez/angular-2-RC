import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VideoClubService } from '../../services/index';
import { Film } from '../../models/index';

@Component({
    moduleId: module.id,
    selector: 'app-detail-film',
    templateUrl: './detail-film.html',
    styleUrls: ['./detail-film.css']
})

export class DetailFilmComponent implements OnInit {
    @Input() film: Film;

    constructor(private _videoClubService: VideoClubService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let name: string = this._activatedRoute.snapshot.params['name'];
        let title: string = this._activatedRoute.snapshot.params['title'];
        console.log('ngOnInit DetailFilmComponent: '+name + ' y '+ title);
    }

}
