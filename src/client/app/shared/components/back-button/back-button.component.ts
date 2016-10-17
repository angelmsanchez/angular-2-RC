import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-back-button',
    templateUrl: 'back-button.html',
    styleUrls: ['back-button.css']
})

export class BackButtonComponent implements OnInit {
    public enabledButton: boolean = true;
    public valueText: string = 'angel';

    // constructor(private route: Route) {
    // }

    ngOnInit() {
        console.log('ngOnInit back button : ');
        // console.log('ngOnInit back button', this.route);     
        if (this.valueText === 'home') {
            this.enabledButton = false;
        } else {
            this.enabledButton = true;
        }
    }

    goBack() {
        console.log('goBack back button');
    }
}
