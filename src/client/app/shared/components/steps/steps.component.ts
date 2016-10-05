import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-steps',
    moduleId: module.id,
    templateUrl: './steps.html',
    styleUrls: ['./steps.css']
})
export class StepsComponent implements OnInit {
    @Input() steps: String[];
    @Input() actualStep: Object;

    public isPar: boolean;

    ngOnInit() {
        console.log('this.actualSteps ', this.actualStep);
    }

}
