import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { PomodoroComponent } from './pomodoro.component';
import { StepsComponent } from './steps/steps.component';
import { PomodoroRoutingModule } from './pomodoro.routing.module';

@NgModule({
    imports: [
        CommonModule,
        PomodoroRoutingModule,
        SharedModule,
        DropdownModule
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
