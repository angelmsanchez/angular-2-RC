import { Component, OnInit } from '@angular/core';

import { ContribService } from '../../services/contrib.service';
import { Constants } from '../../constants/index';

@Component({
    selector: 'app-header',
    moduleId: module.id,
    templateUrl: './header.html',
    styleUrls: ['./header.css'],
    providers: [ContribService]
})
export class HeaderComponent implements OnInit {
    public headerContent: Object;
    public urlImg: String;

    constructor(private contribService: ContribService) {
    }

    ngOnInit() {
        this.contribComun();
        this.urlImg = Constants.URL_IMG + 'angularjs-logo.png';
    }

    contribComun() {
        this.contribService
            .getContrib('comun')
            .subscribe((data: any) => this.headerContent = data);
    }

    goToUrl(url: string): boolean {
        if (url) {
            window.open(url);
        }
        return false;
    }
}
