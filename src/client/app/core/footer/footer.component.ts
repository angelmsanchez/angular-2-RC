import { Component, OnInit } from '@angular/core';

// import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.html',
    styleUrls: ['footer.css']
})

export class FooterComponent implements OnInit {
    actualYear: string;

    ngOnInit() {
        console.log('footer componetn');
        // this.actualYear = moment().format();
    }
}
