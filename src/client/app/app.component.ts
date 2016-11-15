import { ContribService } from './contrib.service';
import { Component } from '@angular/core';
import { Config } from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'a2-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor(private _contribService: ContribService) {
        console.log('Environment config', Config);
        _contribService.getContrib('app-component');
    }
}
