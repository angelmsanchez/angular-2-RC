import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.html',
    styleUrls: ['footer.css']
})

export class FooterComponent implements OnInit {
    actualYear: number;

    ngOnInit() {
        this.actualYear = moment().get('year');
    }
}
