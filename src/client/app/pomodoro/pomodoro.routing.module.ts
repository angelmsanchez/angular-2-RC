import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { PomodoroComponent } from './pomodoro.component';

export const routes: Route[] = [
    {
        path: '',
        component: PomodoroComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PomodoroRoutingModule { }
