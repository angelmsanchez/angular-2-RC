import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-spinner',
    templateUrl: 'spinner.html',
    styleUrls: ['spinner.css'],
})

export class SpinnerComponent {
    @Input() showOn: boolean;

}
