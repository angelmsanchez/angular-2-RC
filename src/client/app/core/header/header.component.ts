import { Component, OnInit } from '@angular/core';

import { ContribService } from './../../core/services/contrib.service';
import { Constants } from './../../shared/constants/constants';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
    public headerContent: Object;
    public urlImg: String;
    public speakers: Object;

    constructor(
        private _contribService: ContribService) {
    }

    ngOnInit() {
        this.contribComun();
        this.urlImg = Constants.URL_IMG + 'angularjs-logo.png';
    }

    goToUrl(url: string): boolean {
        if (url) {
            window.open(url);
        }
        return false;
    }

    private contribComun() {
        this._contribService
            .getContrib('comun')
            .subscribe((data: any) => this.headerContent = data);
    }

}
