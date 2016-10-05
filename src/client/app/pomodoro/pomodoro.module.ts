import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PomodoroComponent } from './pomodoro.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [PomodoroComponent, StepsComponent],
    exports: [PomodoroComponent]
})

export class PomodoroModule { }
