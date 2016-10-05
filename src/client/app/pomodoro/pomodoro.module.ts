import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PomodoroComponent } from './pomodoro.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [PomodoroComponent],
    exports: [PomodoroComponent]
})

export class PomodoroModule { }
