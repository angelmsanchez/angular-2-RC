import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PomodoroComponent],
    exports: [PomodoroComponent]
})

export class PomodoroModule { }
