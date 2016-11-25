import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { D3Component } from './d3.component';

export const routes: Route[] = [
    {
        path: '',
        component: D3Component,
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
export class D3RoutingModule { }
