import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { PomodoroComponent } from './pomodoro.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DropdownModule,
    ],
    declarations: [
        PomodoroComponent,
        StepsComponent
    ],
    exports: [
        PomodoroComponent
    ]
})

export class PomodoroModule { }
