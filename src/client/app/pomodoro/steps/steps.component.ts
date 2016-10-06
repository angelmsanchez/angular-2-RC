import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-steps',
    moduleId: module.id,
    templateUrl: './steps.html',
    styleUrls: ['./steps.css']
})
export class StepsComponent {
    @Input() steps: String[];
    @Input() actualStep: Object;

    public isPar: boolean;

}
